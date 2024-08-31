import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [],
  template: `
  <ul class="list-unstyled d-flex flex-row h-100 justify-content-between p-1 px-4 w-100 m-0">
    <li>{{actualTime.getHours() + ":" + actualTime.getMinutes().toString().padStart(2, "0")}}</li>
    <ul class="list-unstyled d-flex flex-row gap-2">
        <li><i class="bi bi-house-fill"></i></li>
        <li><i class="bi bi-house-fill"></i></li>
        <li><i class="bi bi-house-fill"></i></li>
        <li><i class="bi bi-house-fill"></i></li>
    </ul>
  </ul>
  `,
  styles: ``
})
export class TopMenuComponent implements OnInit {
  public actualTime: Date = new Date();

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        setInterval(() => {
          this.ngZone.run(() => {
            this.actualTime = new Date();
          });
        }, 60000);
      });
    }
  }
}