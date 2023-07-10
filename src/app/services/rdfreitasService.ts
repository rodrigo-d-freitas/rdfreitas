import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter, map, Observable } from "rxjs";

import { Menu } from "../models/Menu";
import { Portfolio } from "../models/Portfolio";

@Injectable()
export class RdfreitasService {

    portfolios : Portfolio[];

    constructor(private http: HttpClient) {}

    protected UrlServiceV1: string = 'http://localhost:3000/';

    obterPorId(id: number) : Observable<Portfolio> {
        return this.itensPortfolio()?.pipe(
            map(portfolios => portfolios.find(portfolio => portfolio.id == id))
        )
    }

    construirMenu() : Observable<Menu[]> {
        return this.http.get<Menu[]>(this.UrlServiceV1 + "menu");
    }

    itensPortfolio() : Observable<Portfolio[]> {
        return this.http.get<Portfolio[]>(this.UrlServiceV1 + "portfolio");
    }   

}