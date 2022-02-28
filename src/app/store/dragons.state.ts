import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';
import {
  Action,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { IDragon } from '../core/models/dragons';
import { RouterStateUrl } from './router/custom-serializer';
import { getCurrentRoute } from './router/router.selector';

export interface IDragonsState extends EntityState<IDragon> {}

export const dragonsAdapter = createEntityAdapter<IDragon>({
  sortComparer: sortByName,
});

export function sortByName(a: IDragon, b: IDragon): number {
  const compare = a.name.localeCompare(b.name);
  if (compare > 0) {
    return 1;
  }

  if (compare < 0) {
    return -1;
  }
  return compare;
}

export const dragonInitialState: IDragonsState =
  dragonsAdapter.getInitialState();

const getDragonsState = createFeatureSelector<IDragonsState>('dragons');
export const dragonsSelectors = dragonsAdapter.getSelectors();

export const getDragons = createSelector(
  getDragonsState,
  dragonsSelectors.selectAll
);
export const getDragonsEntities = createSelector(
  getDragonsState,
  dragonsSelectors.selectEntities
);

export const getDragonById = createSelector(
  getDragonsEntities,
  getCurrentRoute,
  (dragons, route: RouterStateUrl) => {
    return dragons ? dragons[route.params?.id] : null;
  }
);

export const loadDragons = createAction('[Dragons] Carrega dragões');
export const loadDragonsSuccess = createAction(
  '[Dragons] Sucesso Carrega dragões',
  props<{ dragons: IDragon[] }>()
);

export const deleteDragon = createAction(
  '[Dragons] Deleta um dragão',
  props<{ id: string }>()
);

export const deleteDragonSuccess = createAction(
  '[Dragons] Sucesso Deleta um dragão',
  props<{ id: string }>()
);

export const addDragon = createAction(
  '[Dragons] Adiciona um dragão',
  props<{ dragon: any }>()
);

export const addDragonSuccess = createAction(
  '[Dragons] Sucesso Adiciona um dragão',
  props<{ dragon: any }>()
);

export const updateDragon = createAction(
  '[Dragons] Altera um dragão',
  props<{ dragon: any }>()
);

export const updateDragonSuccess = createAction(
  '[Dragons] Sucesso Altera um dragão',
  props<{ dragon: Update<IDragon> }>()
);

export const dummyAction = createAction('[dummy action]');

const _dragonsReducer = createReducer(
  dragonInitialState,
  on(loadDragonsSuccess, (state, { dragons }) => {
    return dragonsAdapter.setAll(
      dragons,
      (state = {
        ...state,
      })
    );
  }),
  on(deleteDragonSuccess, (state, { id }) => {
    return dragonsAdapter.removeOne(id, state);
  }),

  on(addDragonSuccess, (state, { dragon }) => {
    return dragonsAdapter.addOne(dragon, {
      ...state,
    });
  }),

  on(updateDragonSuccess, (state, { dragon }) => {
    return dragonsAdapter.updateOne(dragon, state);
  })
);

export function dragonsReducer(
  state: IDragonsState | undefined,
  action: Action
) {
  return _dragonsReducer(state, action);
}
