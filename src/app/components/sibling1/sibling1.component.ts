import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/NumberService';
import { SubSink } from 'src/app/subsink';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  data: number
  subs = new SubSink()

  constructor(private ns: NumberService) {}

  ngOnInit() {
    this.subs.sink = this.ns.current.subscribe(data => (this.data = data))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
