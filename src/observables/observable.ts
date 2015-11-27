import { Observer } from '../observers/observer';
import { Disposable } from '../disposables/disposable';

export interface Observable<T> {
  observe(observer: Observer<T>): Disposable;
  map<U>(f: (value: T) => U): Observable<U>;
  filter(f: (value: T) => boolean): Observable<T>;
}
