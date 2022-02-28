import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  filter,
  finalize,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { IDragon } from '../core/models/dragons';
import { DragonsService } from '../core/services/dragons.service';
import { SpinnerService } from '../core/services/spinner.service';
import {
  addDragon,
  addDragonSuccess,
  deleteDragon,
  deleteDragonSuccess,
  dummyAction,
  getDragons,
  IDragonsState,
  loadDragons,
  loadDragonsSuccess,
  updateDragon,
  updateDragonSuccess,
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
    return this.actions$.pipe(
      ofType(loadDragons),
      withLatestFrom(
        this.store.select('dragons').pipe(map((dragon) => dragon))
      ),
      switchMap(([action, dragonState]) => {
        if (dragonState.ids.length <= 1) {
          return this.dragonService.getDragons().pipe(
            map((dragons) => {
              return loadDragonsSuccess({ dragons });
            }),
            finalize(() => {
              this.spinnerService.off();
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  deleteDragon = createEffect(() => {
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
    return this.actions$.pipe(
      ofType(addDragon),
      switchMap((action) => {
        return this.dragonService.addDragon(action.dragon).pipe(
          map((data) => {
            return addDragonSuccess({ dragon: data });
          }),
          finalize(() => {
            this.router.navigateByUrl('/dragons');
            this.spinnerService.off();
          })
        );
      })
    );
  });

  updateDragon = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateDragon),
      switchMap((action) => {
        return this.dragonService.editDragon(action.dragon).pipe(
          map((data) => {
            const updatedDragon: Update<IDragon> = {
              id: action.dragon.id,
              changes: {
                ...action.dragon,
              },
            };
            return updateDragonSuccess({ dragon: updatedDragon });
          }),
          finalize(() => {
            this.router.navigateByUrl('/dragons');
            this.spinnerService.off();
          })
        );
      })
    );
  });

  getDragon = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return (
          r.payload.routerState.url.startsWith('/dragons/edit') ||
          r.payload.routerState.url.startsWith('/dragons/detail')
        );
      }),
      map((r: any) => {
        return r.payload.routerState.params.id;
      }),
      withLatestFrom(this.store.select(getDragons)),
      switchMap(([id, dragons]) => {
        if (!dragons.length) {
          return this.dragonService.getDragon(id).pipe(
            map((dragon) => {
              const postData = [{ ...dragon, id }];
              return loadDragonsSuccess({ dragons: postData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
}
