import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AppActions } from './app.actions';

export interface AppStateModel {
  title: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    title: 'I\'m a text comming from the NGXS state but I will change because an action will be fired in...'
  }
})
@Injectable()
export class AppState {

  @Selector()
  public static getTitle(state: AppStateModel): string {
    return state.title;
  }

  @Action(AppActions.ChangeTitle)
  public async changeTitle(ctx: StateContext<AppStateModel>, { payload }: AppActions.ChangeTitle): Promise<AppStateModel> {
    return ctx.patchState(
      {title: payload}
    );
  }
}
