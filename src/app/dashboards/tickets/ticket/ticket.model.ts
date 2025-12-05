export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}

export interface TicketData {
  title: string;
  ticketText: string;
}
