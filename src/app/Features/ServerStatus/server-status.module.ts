import { NgModule } from "@angular/core";
import { CPUBarComponent } from "./cpubar/cpubar.component";
import { MemoryBarComponent } from "./memory-bar/memory-bar.component";
import { ClusterStatusCardComponent } from "./cluster-status-card/cluster-status-card.component";
import { NodeStatusCardsComponent } from "./node-status-cards/node-status-cards.component";

@NgModule({
  declarations: [
    CPUBarComponent,
    MemoryBarComponent,
    ClusterStatusCardComponent,
    NodeStatusCardsComponent
  ],
  exports: [
    ClusterStatusCardComponent
  ]
})
export class ServerStatusModule { }
