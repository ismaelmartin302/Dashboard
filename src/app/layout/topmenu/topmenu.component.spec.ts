import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './topmenu.component';

describe('MenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
