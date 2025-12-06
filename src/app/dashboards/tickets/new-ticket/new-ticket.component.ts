import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { TicketData } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private formElement?: ElementRef<HTMLFormElement>;
  //@ViewChildren(ButtonElement) buttons?:ElementRef<HTMLButtonElement>; // for multiple elements
  private formElement = viewChild.required<HTMLFormElement>('form'); // after angular 17.3
  // @Output() add = new EventEmitter
  add = output<TicketData>();
  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    // not guaranteed to have the values from view child

    console.log('OnInit', this.formElement());
  }
  ngAfterViewInit(): void {
    // guaranteed to have values available in view child
    console.log('After view init', this.formElement());
  }

  onSubmit() {
    const ticketData: TicketData = {
      title: this.enteredTitle,
      ticketText: this.enteredText,
    };
    this.add.emit(ticketData);
    // this.formElement()?.['nativeElement'].reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
