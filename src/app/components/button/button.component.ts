import { Component } from '@angular/core';
import { StringService } from 'src/app/services/string.service';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  message: string;

  constructor(
    private ss: StringService,
    private ns: NumberService
    ) {}

  click() {
    this.ss.change("We share an Abstract Service!");
    this.ns.change(5);
  }
}
