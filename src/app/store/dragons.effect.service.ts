import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { finalize, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { DragonsService } from '../core/services/dragons.service';
import { SpinnerService } from '../core/services/spinner.service';
import {
  addDragon,
  addDragonSucess,
  deleteDragon,
  deleteDragonSuccess,
  IDragonsState,
  loadDragons,
  loadDragonsSuccess,
} from './dragons.state';

@Injectable({
  providedIn: 'root',
})
export class DragonsEffectService {
  constructor(
    private actions$: Actions,
    private store: Store<{ dragons: IDragonsState }>,
    private dragonService: DragonsService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  loadDragons = createEffect(() => {
    this.spinnerService.on();
    return this.actions$.pipe(
      ofType(loadDragons),
      withLatestFrom(
        this.store.select('dragons').pipe(map((dragon) => dragon.dragons))
      ),
      switchMap(([action, dragons]) => {
        if (dragons.length <= 1) {
          return this.dragonService.getDragons().pipe(
            map((dragons) => {
              return loadDragonsSuccess({ dragons });
            }),
            finalize(() => this.spinnerService.off())
          );
        }
        return of(loadDragonsSuccess({ dragons }));
      })
    );
  });

  deleteDragon = createEffect(() => {
    this.spinnerService.on();
    return this.actions$.pipe(
      ofType(deleteDragon),
      switchMap((action) => {
        return this.dragonService.deleteDragon(action.id).pipe(
          map(() => {
            return deleteDragonSuccess({ id: action.id });
          }),
          finalize(() => this.spinnerService.off())
        );
      })
    );
  });

  addDragon = createEffect(() => {
    this.spinnerService.on();
    return this.actions$.pipe(
      ofType(addDragon),
      switchMap((action) => {
        return this.dragonService.addDragon(action.dragon).pipe(
          map((data) => {
            this.router.navigateByUrl('/dragons');
            return addDragonSucess({ dragon: data });
          }),
          finalize(() => this.spinnerService.off())
        );
      })
    );
  });
}
