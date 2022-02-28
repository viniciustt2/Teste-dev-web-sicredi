import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AddDragonsComponent } from './add-dragons.component';

describe('AddDragonsComponent', () => {
  let component: AddDragonsComponent;
  let fixture: ComponentFixture<AddDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDragonsComponent],
      providers: [FormBuilder],
      imports: [StoreModule.forRoot({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
