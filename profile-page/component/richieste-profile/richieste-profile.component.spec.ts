import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiesteProfileComponent } from './richieste-profile.component';

describe('RichiesteProfileComponent', () => {
  let component: RichiesteProfileComponent;
  let fixture: ComponentFixture<RichiesteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichiesteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiesteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
