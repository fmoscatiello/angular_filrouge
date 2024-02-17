import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFormationComponent } from './evaluation-formation.component';

describe('EvaluationFormationComponent', () => {
  let component: EvaluationFormationComponent;
  let fixture: ComponentFixture<EvaluationFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
