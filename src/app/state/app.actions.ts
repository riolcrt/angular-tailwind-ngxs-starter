export namespace AppActions {
  export class ChangeTitle {
    public static readonly type = '[App] Change Title';
    constructor(public payload: string) { }
  }
}

