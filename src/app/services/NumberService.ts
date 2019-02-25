import { Injectable } from "@angular/core";
import { AbstractService } from "./AbstractService";

@Injectable()
export class NumberService extends AbstractService<number> {}
