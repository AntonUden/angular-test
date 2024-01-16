import { Component, Input } from '@angular/core';

@Component({
  selector: 'server-cpu-bar',
  templateUrl: './cpubar.component.html',
  styleUrl: './cpubar.component.scss'
})
export class CPUBarComponent {
  @Input() load!: number;
  @Input() offline: boolean = false;

  getUsage(): number {
    if (this.offline) {
      return 0;
    }

    if (this.load == undefined || isNaN(this.load)) {
      return 0;
    }

    return this.load * 100;
  }

  getText(): string {
    if (this.offline) {
      return "Offline";
    }
    return Math.round(this.getUsage()) + "%";
  }
}
