import { Injectable } from "@angular/core";
import { RdfreitasService } from "src/app/services/rdfreitasService";
import { LoggerService } from "./logger.service";


@Injectable({
    providedIn: 'root'
})
export class UnitTestsService {

    constructor(private logger: LoggerService) {}

    add(n1: number, n2: number) {
        this.logger.log('Método de adição chamado');
        return n1 + n2;
    }

    subtract(n1: number, n2: number){
        this.logger.log('Método de subtração chamado');
        return n1 - n2;
    }
}