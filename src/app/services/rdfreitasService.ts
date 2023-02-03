import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Menu } from "./Menu";
import { Portfolio } from "../models/Portfolio";

@Injectable()
export class RdfreitasService {

    constructor(private http: HttpClient) {

    }

    protected UrlServiceV1: string = 'http://localhost:3000/';

    construirMenu() : Observable<Menu[]> {
        return this.http.get<Menu[]>(this.UrlServiceV1 + "menu");
    }

    itensPortfolio() : Observable<Portfolio[]> {
        return this.http.get<Portfolio[]>(this.UrlServiceV1 + "portfolio");
    }

}