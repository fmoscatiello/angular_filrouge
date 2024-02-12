import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsThemeComponent } from './formations-theme.component';

describe('FormationsThemeComponent', () => {
  let component: FormationsThemeComponent;
  let fixture: ComponentFixture<FormationsThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationsThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
