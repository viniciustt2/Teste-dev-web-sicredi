import { Component, OnInit } from '@angular/core';
import { IDragon } from 'src/app/core/models/dragons';
import { Store } from '@ngrx/store';
import {
  deleteDragon,
  getDragons,
  IDragonsState,
  loadDragons,
} from 'src/app/store/dragons.state';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.css'],
})
export class ListDragonsComponent implements OnInit {
  dragons$ = this.store.select(getDragons);

  constructor(
    private store: Store<{ dragons: IDragonsState }>,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadDragons());
  }

  deleteDragon(dragon: IDragon): void {
    this.spinnerService.on();
    this.store.dispatch(deleteDragon({ id: dragon.id }));
  }

  editDragon(dragon: IDragon): void {
    this.router.navigateByUrl('dragons/edit/' + dragon.id);
  }

  detailDragon(dragon: IDragon): void {
    this.router.navigateByUrl('dragons/detail/' + dragon.id);
  }
}
