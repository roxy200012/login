import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloStagistiComponent } from './profilo-stagisti.component';

describe('ProfiloStagistiComponent', () => {
  let component: ProfiloStagistiComponent;
  let fixture: ComponentFixture<ProfiloStagistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiloStagistiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloStagistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
