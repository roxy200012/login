import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificheProfileComponent } from './notifiche-profile.component';

describe('NotificheProfileComponent', () => {
  let component: NotificheProfileComponent;
  let fixture: ComponentFixture<NotificheProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificheProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificheProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
