import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/NumberService';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  data: number;

  constructor(private ns: NumberService) { }

  ngOnInit() {
    this.ns.current.subscribe(data => this.data = data)
  }
}
