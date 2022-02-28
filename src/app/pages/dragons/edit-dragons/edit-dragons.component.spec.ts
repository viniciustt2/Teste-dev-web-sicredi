import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { EditDragonsComponent } from './edit-dragons.component';

describe('EditDragonsComponent', () => {
  let component: EditDragonsComponent;
  let fixture: ComponentFixture<EditDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDragonsComponent ],
      providers: [FormBuilder, Store],
      imports: [StoreModule.forRoot({})],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
