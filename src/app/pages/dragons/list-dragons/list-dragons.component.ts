import { Component, OnInit } from '@angular/core';
import { IDragon } from 'src/app/core/models/dragons';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  deleteDragon,
  IDragonsState,
  loadDragons,
} from 'src/app/store/dragons.state';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.css'],
})
export class ListDragonsComponent implements OnInit {
  dragons$ = this.store
    .select('dragons')
    .pipe(map((dragons) => dragons.dragons));

  constructor(private store: Store<{ dragons: IDragonsState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadDragons());
  }

  deleteDragon(dragon: IDragon) {
    this.store.dispatch(deleteDragon({ id: dragon.id }));
  }
}
