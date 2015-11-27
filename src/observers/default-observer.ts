import { Observer } from '../observers/observer';

export class DefaultObserver<T> implements Observer<T> {
  constructor(
    private next: (value: T) => void,
    private completed: () => void,
    private error: (e: Error) => void
  ) {
  }
  
  onNext(value: T): void {
    this.next(value);
  }
  
  onCompleted(): void {
    this.completed();
  }
  
  onError(e: Error): void {
    this.error(e);
  }
}