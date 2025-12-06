import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }, // adds key/value pairs as attributes to the host element
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; // discouraged in new versions
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }

  // To access Projected Content use this
  // @ContentChild('input') private inputControl?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private inputControl =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  private el = inject(ElementRef);

  constructor() {
    // afterRender(() => console.log('After render'));
    // afterNextRender(() => {
    //   console.log('After next render');
    // });
  }
  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.inputControl());
  }
  label = input.required<string>();
}
