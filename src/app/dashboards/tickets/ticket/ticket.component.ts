import { Component } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Ticket, TicketData } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {}
