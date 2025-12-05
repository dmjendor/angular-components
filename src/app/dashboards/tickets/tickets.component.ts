import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket, TicketData } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: TicketData) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.ticketText,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }
}
