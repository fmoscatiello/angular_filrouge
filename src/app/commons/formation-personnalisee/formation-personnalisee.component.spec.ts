import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPersonnaliseeComponent } from './formation-personnalisee.component';

describe('FormationPersonnaliseeComponent', () => {
  let component: FormationPersonnaliseeComponent;
  let fixture: ComponentFixture<FormationPersonnaliseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationPersonnaliseeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationPersonnaliseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
