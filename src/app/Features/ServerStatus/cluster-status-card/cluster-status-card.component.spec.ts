import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterStatusCardComponent } from './cluster-status-card.component';

describe('ClusterStatusCardComponent', () => {
  let component: ClusterStatusCardComponent;
  let fixture: ComponentFixture<ClusterStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClusterStatusCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClusterStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
