import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IAppState } from 'src/app/store/app.state';

import { ListDragonsComponent } from './list-dragons.component';

describe('ListDragonsComponent', () => {
  let component: ListDragonsComponent;
  let fixture: ComponentFixture<ListDragonsComponent>;
  let store: MockStore<IAppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDragonsComponent],
      imports: [RouterTestingModule],

      providers: [provideMockStore({})],
    }).compileComponents();
    store = TestBed.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    
    expect(component).toBeTruthy();
  });
});
