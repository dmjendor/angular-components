import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') private formElement?: ElementRef<HTMLFormElement>;
  //@ViewChildren(ButtonElement) buttons?:ElementRef<HTMLButtonElement>; // for multiple elements
  private formElement = viewChild.required<HTMLFormElement>('form'); // after angular 17.3

  onSubmit(titleElement: string, requestElement: string) {
    // alternative to two way binding
    const enteredTitle = titleElement;
    const enteredRequest = requestElement;
    // this.formElement?.nativeElement.reset();
    // this.formElement?.nativeElement.reset();
    this.formElement()?.['nativeElement'].reset();
    console.log(enteredTitle, enteredRequest);
  }
}
