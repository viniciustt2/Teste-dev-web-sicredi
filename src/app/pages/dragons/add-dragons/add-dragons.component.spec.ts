import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDragonsComponent } from './add-dragons.component';

describe('AddDragonsComponent', () => {
  let component: AddDragonsComponent;
  let fixture: ComponentFixture<AddDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDragonsComponent ]
    })
    .compileComponents();
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
