export interface Observer<T> {
  onNext(value: T): void;
  onCompleted(): void;
  onError(e: Error): void;
}
