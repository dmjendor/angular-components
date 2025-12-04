import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboards/server-status/server-status.component';
import { TrafficComponent } from './dashboards/traffic/traffic.component';
import { TicketsComponent } from './dashboards/tickets/tickets.component';
import { DashboardItemComponent } from './dashboards/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
