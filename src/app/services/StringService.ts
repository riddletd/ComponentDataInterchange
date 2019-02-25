import { Injectable } from "@angular/core";
import { AbstractService } from "./AbstractService";

@Injectable()
export class StringService extends AbstractService<string> {}
