import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfilePageComponent } from './sidebar-profile-page.component';

describe('SidebarProfilePageComponent', () => {
  let component: SidebarProfilePageComponent;
  let fixture: ComponentFixture<SidebarProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
