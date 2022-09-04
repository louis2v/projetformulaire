import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormByCodeComponent } from './form-by-code.component';

describe('FormByCodeComponent', () => {
  let component: FormByCodeComponent;
  let fixture: ComponentFixture<FormByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormByCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
