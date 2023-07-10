import { Injectable } from "@angular/core";
import { RdfreitasService } from "src/app/services/rdfreitasService";


@Injectable({
    providedIn: 'root'
})
export class UnitTestsService {

    constructor() {

    }

    add(n1: number, n2: number) {
        return n1 + n2;
    }

    subtract(n1: number, n2: number){
        return n1 - n2;
    }
}