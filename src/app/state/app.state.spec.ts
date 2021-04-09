import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './app.state';
import { AppActions } from './app.actions';

describe('App store', () => {
  let store: Store;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create an action and change the title', () => {
    const expected = 'im changed';

    store.dispatch(new AppActions.ChangeTitle(expected));
    const actual = store.selectSnapshot(AppState.getTitle);
    expect(actual).toEqual(expected);
  });

});
