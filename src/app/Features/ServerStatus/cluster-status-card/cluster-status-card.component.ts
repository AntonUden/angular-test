import { Component, Input } from '@angular/core';
import PVEStatus from '../../../core/interfaces/PVEStatus';
import { PVEDataFetcherService } from '../../../data/pvedata-fetcher.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'server-cluster-status-card',
  templateUrl: './cluster-status-card.component.html',
  styleUrl: './cluster-status-card.component.scss',
  providers: [PVEDataFetcherService],
})
export class ClusterStatusCardComponent {
  @Input() pveStatsURL!: string;
  @Input() timeBetweenPolls: number = 5000;

  status: PVEStatus | null = null;
  errorState: boolean = false;

  private pollInterval: any = null;

  constructor(private dataFetcher: PVEDataFetcherService) { }

  pollState() {
    this.dataFetcher.getStatus(this.pveStatsURL).pipe(
      catchError((err: any) => {
        console.error(err);
        this.errorState = true;
        throw err;
      })
    ).subscribe((data => {
      data.nodes.sort((a, b) => a.name.localeCompare(b.name));
      this.status = data;
      this.errorState = false;
    }));
  }

  // My API sucks and can not handle the correct total cpu value if a node is offline so lets figure it out ourselves
  calcCPUAvg(): number {
    // Abort if no status object
    if (this.status == null) {
      return 0;
    }

    let onlineNodes = 0;
    let total = 0;

    this.status.nodes.forEach(n => {
      // Skip offline nodes
      if (n.online) {
        onlineNodes++;
        total += n.cpu.usage;
      }
    });

    if (onlineNodes == 0) { // Prevent nuclear explosion by dividing by 0
      return 0;
    }

    return total / onlineNodes;
  }

  ngOnInit() {
    this.pollInterval = setInterval(() => {
      this.pollState();
    }, this.timeBetweenPolls);
    this.pollState();
  }

  ngOnDestroy() {
    if (this.pollInterval != null) {
      clearInterval(this.pollInterval);
    }
  }
}
