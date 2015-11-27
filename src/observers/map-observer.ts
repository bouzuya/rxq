import { Observer } from './observer';

export class MapObserver<T, U> implements Observer<T> {
  constructor(
    private observer: Observer<U>,
    private f: (value: T) => U
  ) {
  }

  onNext(value: T): void {
    this.observer.onNext(this.f(value));
  }
  
  onCompleted(): void {
    this.observer.onCompleted();
  }
  
  onError(e: Error): void {
    this.observer.onError(e);
  }
}
