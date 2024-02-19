import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancementListComponent } from './financement-list.component';

describe('FinancementListComponent', () => {
  let component: FinancementListComponent;
  let fixture: ComponentFixture<FinancementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancementListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
