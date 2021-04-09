import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AppActions } from './app.actions';

export interface AppStateModel {
  title: string;
}

@State<AppStateModel>({
  name: 'app',
})
@Injectable()
export class AppState {

  @Selector()
  public static getTitle(state: AppStateModel): string {
    return state.title;
  }

  @Action(AppActions.ChangeTitle)
  public changeTitle(ctx: StateContext<AppStateModel>, { payload }: AppActions.ChangeTitle): void {
    const stateModel = ctx.getState();
    stateModel.title = payload;
    ctx.setState(stateModel);
  }
}
