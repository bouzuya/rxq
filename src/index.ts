import { Disposable } from './disposables/disposable';
import { Observable } from './observables/observable';
import { Observer } from './observers/observer';
import { ArrayObservable } from './observables/array-observable';
import { DefaultObserver } from './observers/default-observer';

function from<T>(array: Array<T>): Observable<T> {
  return new ArrayObservable<T>(array);
}

// from([1, 2, 3])
//   .filter(value => value % 2 === 0)
//   .map(value => value.toString())
//   .observe(new DefaultObserver(
//     value => console.log(`onNext: ${value}`),
//     () => console.log('onCompleted'),
//     e => console.log('onError')
//   ));
