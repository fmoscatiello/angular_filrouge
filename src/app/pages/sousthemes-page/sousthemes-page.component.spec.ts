import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousthemesPageComponent } from './sousthemes-page.component';

describe('SousthemesPageComponent', () => {
  let component: SousthemesPageComponent;
  let fixture: ComponentFixture<SousthemesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousthemesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SousthemesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
