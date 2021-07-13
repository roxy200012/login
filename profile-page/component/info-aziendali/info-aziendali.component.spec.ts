import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAziendaliComponent } from './info-aziendali.component';

describe('InfoAziendaliComponent', () => {
  let component: InfoAziendaliComponent;
  let fixture: ComponentFixture<InfoAziendaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAziendaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAziendaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
