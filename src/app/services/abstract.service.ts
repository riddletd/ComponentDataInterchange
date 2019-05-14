import { Subject } from "rxjs";

export class AbstractService<T> {
  private source = new Subject<T>();
  current = this.source.asObservable();

  change(data: T) {
    this.source.next(data);
  }
}
