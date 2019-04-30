import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/NumberService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  data: number;
  subscription: Subscription;

  constructor(private ns: NumberService) {}

  ngOnInit() {
    this.subscription = this.ns.current.subscribe(data => (this.data = data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
