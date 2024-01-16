import { Component, Input } from '@angular/core';
import ServerStatusUtils from '../../../core/classes/ServerStatusUtils';
import { StorageComponent } from '../../../core/interfaces/PVEStatus';

@Component({
  selector: 'server-memory-bar',
  templateUrl: './memory-bar.component.html',
  styleUrl: './memory-bar.component.scss'
})
export class MemoryBarComponent {
  @Input() storageComponent!: StorageComponent
  @Input() offline: boolean = false

  calcPercentage(): number {
    if(this.storageComponent.current == undefined || isNaN(this.storageComponent.current)) {
      return 0;
    }

    if(this.storageComponent.max == undefined || isNaN(this.storageComponent.max)) {
      return 0;
    }

    if(this.offline) {
      return 0;
    }
    return ServerStatusUtils.calculatePercentage(this.storageComponent.current, this.storageComponent.max)
  }

  getText(): string {
    if(this.offline) {
      return "Offline";
    }
    return Math.round(this.calcPercentage()) + "% (" + ServerStatusUtils.bytesToSize(this.storageComponent.current) + " / " + ServerStatusUtils.bytesToSize(this.storageComponent.max) + ")"
  }
}
