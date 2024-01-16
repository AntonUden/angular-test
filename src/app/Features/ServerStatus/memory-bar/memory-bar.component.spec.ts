import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryBarComponent } from './memory-bar.component';

describe('MemoryBarComponent', () => {
  let component: MemoryBarComponent;
  let fixture: ComponentFixture<MemoryBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
