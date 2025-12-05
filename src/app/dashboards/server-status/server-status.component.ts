import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: NodeJS.Timeout; // OR
  // private interval?: ReturnType<typeof setInterval>;
  // Only available in later versions of angular
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
    effect((onCleanup) => {
      const timer = setTimeout(() => {
        console.log('cleanup', this.currentStatus());
      }, 1000);
      onCleanup(() => {
        clearTimeout(timer);
      });
    });
  }

  ngOnInit() {
    console.log('On Init');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('After View Init');
  }

  // For older versions of angular
  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
