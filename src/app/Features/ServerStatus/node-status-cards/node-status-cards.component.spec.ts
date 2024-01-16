import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeStatusCardsComponent } from './node-status-cards.component';

describe('NodeStatusCardsComponent', () => {
  let component: NodeStatusCardsComponent;
  let fixture: ComponentFixture<NodeStatusCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeStatusCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeStatusCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
