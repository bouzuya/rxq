import { Disposable } from '../disposables/disposable';
import { Observable } from '../observables/observable';
import { FilterObservable } from '../observables/filter-observable';
import { MapObservable } from '../observables/map-observable';
import { Observer } from '../observers/observer';

export abstract class ObservableBase<T> implements Observable<T> {
  abstract observe(observer: Observer<T>): Disposable;

  map<U>(f: (value: T) => U): Observable<U> {
    return new MapObservable<T, U>(this, f);
  }
  
  filter(f: (value: T) => boolean): Observable<T> {
    return new FilterObservable<T>(this, f);
  }
}
