import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditeEmployeeComponent } from './add-edite-employee.component';

describe('AddEditeEmployeeComponent', () => {
  let component: AddEditeEmployeeComponent;
  let fixture: ComponentFixture<AddEditeEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditeEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
