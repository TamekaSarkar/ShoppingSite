import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class Store<T> {
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject<T>(initialState);// it is private not exposed to outside
    this.state$ = this._state$.asObservable();//exposing this state to outside world as observable
  }
  select<T>(selectorFunction: any): Observable<T> {
    return this.state$.pipe(
      distinctUntilChanged(),
      map(selectorFunction));
  }

  // sync
  get state() {
    return this._state$.getValue();
  }

  protected setState(nexState: T): void {
    console.log('-----------------------');
    console.log('Previous State', this.state);

    this._state$.next(nexState);

    console.log('Current State', this.state);
    console.log('-----------------------');
  }
}
