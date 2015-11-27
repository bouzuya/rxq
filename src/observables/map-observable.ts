import { Observable } from '../observables/observable';
import { Observer } from '../observers/observer';
import { ObservableBase } from '../observables/observable-base';
import { MapObserver } from '../observers/map-observer';
import { Disposable } from '../disposables/disposable';

export class MapObservable<T, U> extends ObservableBase<U> {
  constructor(
    private source: Observable<T>,
    private f: (value: T) => U
  ) {
    super();
  }
  
  observe(observer: Observer<U>): Disposable {
    return this.source.observe(new MapObserver<T, U>(observer, this.f));
  }
}
