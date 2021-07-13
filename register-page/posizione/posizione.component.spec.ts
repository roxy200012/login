import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosizioneComponent } from './posizione.component';

describe('PosizioneComponent', () => {
  let component: PosizioneComponent;
  let fixture: ComponentFixture<PosizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosizioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
