import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDragonById, IDragonsState } from 'src/app/store/dragons.state';

@Component({
  selector: 'app-detail-dragon',
  templateUrl: './detail-dragon.component.html',
  styleUrls: ['./detail-dragon.component.css'],
})
export class DetailDragonComponent implements OnInit {
  dragon$ = this.store.select(getDragonById);

  constructor(private store: Store<{ dragons: IDragonsState }>) {}

  ngOnInit(): void {}
}
