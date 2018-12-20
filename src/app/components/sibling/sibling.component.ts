import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  changeMessage() {
    this.data.changeMessage("Yo girl!")
  }
}
