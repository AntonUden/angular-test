import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPUBarComponent } from './cpubar.component';

describe('CPUBarComponent', () => {
  let component: CPUBarComponent;
  let fixture: ComponentFixture<CPUBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CPUBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CPUBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
