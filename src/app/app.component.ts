import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { timer } from 'rxjs';
import { scan, takeWhile, tap } from 'rxjs/operators';
import { AppActions } from './state/app.actions';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTailwindNgxsStarter';

  timer$ = timer(0, 1000).pipe(
    scan(acc => --acc, 10),
    tap(x => { if (x === 0) {this.store.dispatch(new AppActions.ChangeTitle('I have changed!!!! It\'s magic.')); }}),
    takeWhile(x => x >= 0)
  );

  @Select(AppState.getTitle) stateText$;

  constructor(private readonly store: Store) {}
}
