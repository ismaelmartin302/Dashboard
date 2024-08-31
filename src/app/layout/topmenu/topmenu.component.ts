import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.scss'
})
export class TopMenuComponent implements OnInit {
  public actualTime: Date = new Date();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.actualTime = new Date();
      }, 60000);
    }
  }
}