import * as Papa from 'papaparse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class InvestService {

    constructor(private http : HttpClient){}

    dadosCSV: any;

    loadCSV() {
        this.http.get('./assets/csv/extrato.csv', { responseType: 'text'})
            .pipe(distinctUntilChanged()) 
            .subscribe( 
                data => {
                  const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true });
                  this.dadosCSV = parsedData.data;
                },
                error => {
                    console.error('Falha ao carregar o arquivo CSV: ', error);
                }
            );
    
    }
}
