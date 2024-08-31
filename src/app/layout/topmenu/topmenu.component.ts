import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.scss'
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