import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCheckQuestionComponent } from './credit-check-question.component';

describe('CreditCheckQuestionComponent', () => {
  let component: CreditCheckQuestionComponent;
  let fixture: ComponentFixture<CreditCheckQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCheckQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditCheckQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
