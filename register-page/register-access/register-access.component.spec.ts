import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccessComponent } from './register-access.component';

describe('RegisterAccessComponent', () => {
  let component: RegisterAccessComponent;
  let fixture: ComponentFixture<RegisterAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
