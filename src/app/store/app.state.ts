import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { dragonsReducer, IDragonsState } from './dragons.state';

export interface IAppState {
  dragons: IDragonsState;
  router: RouterReducerState;
}
export const appReducer = {
  dragons: dragonsReducer,
  router: routerReducer,
};
