import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosHotelesComponent } from './todos-hoteles.component';

describe('TodosHotelesComponent', () => {
  let component: TodosHotelesComponent;
  let fixture: ComponentFixture<TodosHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosHotelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
