import { Disposable } from './disposables/disposable';
import { ObservableBase } from './observables/observable-base';
import { Observer } from './observers/observer';

export class ArrayObservable<T> extends ObservableBase<T> {
  constructor(
    private array: Array<T>
  ) {
    super();
  }
  
  observe(observer: Observer<T>): Disposable {
    // FIXME: onError
    this.array.forEach(value => {
      observer.onNext(value);
    });
    observer.onCompleted();
    return null; // FIXME: Disposable
  }
}