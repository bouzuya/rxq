import { Disposable } from '../disposables/disposable';
import { FilterObserver } from '../observers/filter-observer';
import { Observable } from '../observables/observable';
import { Observer } from '../observers/observer';
import { ObservableBase } from '../observables/observable-base';

export class FilterObservable<T> extends ObservableBase<T> {
  constructor(
    private source: Observable<T>,
    private f: (value: T) => boolean
  ) {
    super();
  }
  
  observe(observer: Observer<T>): Disposable {
    return this.source.observe(new FilterObserver(observer, this.f));
  }
}
