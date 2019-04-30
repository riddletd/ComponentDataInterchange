import { Component, OnInit } from "@angular/core";
import { StringService } from "src/app/services/StringService";
import { SubSink } from "src/app/subsink";

@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  data: string;
  subs = new SubSink()

  constructor(private ss: StringService) {}

  ngOnInit() {
    this.subs.sink = this.ss.current.subscribe(data => (this.data = data))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
