import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDhotelComponent } from './crudhotel.component';

describe('CRUDhotelComponent', () => {
  let component: CRUDhotelComponent;
  let fixture: ComponentFixture<CRUDhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
