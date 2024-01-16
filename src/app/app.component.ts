import { Component } from '@angular/core';
import { ServerStatusModule } from './Features/ServerStatus/server-status.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'serverstatus';
}
