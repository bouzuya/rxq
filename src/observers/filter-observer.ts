import { Observer } from './observer';

export class FilterObserver<T> implements Observer<T> {
  constructor(
    private observer: Observer<T>,
    private f: (value: T) => boolean
  ) {
  }

  onNext(value: T): void {
    if (this.f(value)) this.observer.onNext(value);
  }
  
  onCompleted(): void {
    this.observer.onCompleted();
  }
  
  onError(e: Error): void {
    this.observer.onError(e);
  }
}

