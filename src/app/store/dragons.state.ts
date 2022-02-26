import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';
import { IDragon } from '../core/models/dragons';

export interface IDragonsState {
  dragons: IDragon[];
}

export const dragonInitialState: IDragonsState = {
  dragons: [],
};

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

export const addDragonSucess = createAction(
  '[Dragons] Sucesso Adiciona um dragão',
  props<{ dragon: any }>()
);

export const dragonsReducer = createReducer(
  dragonInitialState,
  on(loadDragonsSuccess, (state, { dragons }) => {
    state = {
      ...state,
      dragons: dragons,
    };
    return state;
  }),
  on(deleteDragonSuccess, (state, { id }) => {
    const updatedDragons = state.dragons.filter((dragon) => dragon.id !== id);
    state = {
      ...state,
      dragons: updatedDragons,
    };
    return state;
  }),

  on(addDragonSucess, (state, { dragon }) => {
    state = {
      ...state,
      dragons: [...state.dragons, { ...dragon }],
    };
    return state;
  })
);
