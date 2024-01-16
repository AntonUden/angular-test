import { Component, Input } from '@angular/core';
import { Node } from '../../../core/interfaces/PVEStatus';

@Component({
  selector: 'server-node-status-cards',
  templateUrl: './node-status-cards.component.html',
  styleUrl: './node-status-cards.component.scss'
})
export class NodeStatusCardsComponent {
  @Input() node!: Node;
}
