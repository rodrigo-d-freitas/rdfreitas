import { TestBed } from "@angular/core/testing";
import { RdfreitasService } from "./rdfreitasService";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Menu } from "../models/Menu";


describe('RdfreitasService', () => {

    let rdfreitasService : RdfreitasService;
    let httpTestingController : HttpTestingController;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports : [HttpClientTestingModule],
            providers : [
                RdfreitasService
            ]
        });

        rdfreitasService = TestBed.inject(RdfreitasService);
        httpTestingController = TestBed.inject(HttpTestingController); 
    });

    it('Construir o menu', () => {

        rdfreitasService.construirMenu()
            .subscribe(menu => {
                expect(menu).toBeTruthy();
                
            });

        const req = httpTestingController.expectOne('http://localhost:3000/menu');

        expect(req.request.method).toEqual("GET");

        req.flush({
            menu: Object.values(Menu)
        });
    });

    afterEach(() => {
        httpTestingController.verify();
    })
})