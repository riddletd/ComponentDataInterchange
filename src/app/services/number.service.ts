import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";

@Injectable()
export class NumberService extends AbstractService<number> {}
