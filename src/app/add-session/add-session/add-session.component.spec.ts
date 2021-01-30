import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSession } from './add-session.component';

describe('AddSession', () => {
  let component: AddSession;
  let fixture: ComponentFixture<AddSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSession ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});