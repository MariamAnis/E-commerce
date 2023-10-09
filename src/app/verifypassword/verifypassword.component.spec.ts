import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifypasswordComponent } from './verifypassword.component';

describe('VerifypasswordComponent', () => {
  let component: VerifypasswordComponent;
  let fixture: ComponentFixture<VerifypasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifypasswordComponent]
    });
    fixture = TestBed.createComponent(VerifypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});