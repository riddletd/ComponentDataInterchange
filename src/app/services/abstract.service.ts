import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class AbstractService<T> {
  generic: T;
  private source = new BehaviorSubject<T>(this.generic);
  current = this.source.asObservable();

  change(data: T) {
    this.source.next(data);
  }
}
