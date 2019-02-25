import { Component, OnInit } from "@angular/core";
import { StringService } from "src/app/services/StringService";

@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  data: string;

  constructor(private ss: StringService) {}

  ngOnInit() {
    this.ss.current.subscribe(data => (this.data = data));
  }
}
