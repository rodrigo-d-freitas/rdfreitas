import { TestBed, waitForAsync } from "@angular/core/testing";
import { RdfreitasService } from "./rdfreitasService";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Menu } from "../models/Menu";
import { Portfolio } from "../models/Portfolio";
import { of } from "rxjs";


const mockPortfolio: any = [ 
    {
        id : 1,
        titulo : "CRDantas advogados",
        ano : "2023",
        description : "Website desenvolvido  visando posicionamento digital do escritório de advocacia",
        skills : ["HTML", "CSS", "UI Design", "Angular", "Wordpress", "Wordpress Themes"]
     },
     {
        id : 2,
        titulo : "Premag",
        ano : "2023",
        description : "Redesign do site",
        skills : ["HTML", "CSS", "UI Design", "UX Design", "Angular"]
    }
];

describe('Serviço do site', () => {

    let rdfreitasService : RdfreitasService;
    let httpTestingController : HttpTestingController;

    beforeEach(waitForAsync(() => {


        TestBed.configureTestingModule({
            imports : [HttpClientTestingModule],
            providers : [
                RdfreitasService
            ]
        }).compileComponents()
        .then(() => {

            rdfreitasService = TestBed.inject(RdfreitasService);
            httpTestingController = TestBed.inject(HttpTestingController); 
        
        })
    }));

    it('O serviço deve ter sido craido', () => {
        expect(rdfreitasService).toBeTruthy();
    })

    it('Construir o menu', () => {

        const mockMenu: any = [
            {
                nome: "Experiência",
                link: "/experiencia",
                admin: false,
                exact: false
             },
             {
                 nome: "Formação",
                 link: "/formacao",
                 admin: false,
                 exact: false
              }
        ]

        rdfreitasService.construirMenu()
            .subscribe((menu : Menu[]) => {
                
                expect(menu).toEqual(mockMenu)
            });

        const req = httpTestingController.expectOne(`${rdfreitasService.UrlServiceV1}menu`);
        expect(req.request.method).toEqual("GET");
        req.flush(mockMenu);
    });

    it('itens do Portfolio', () => {

        
        rdfreitasService.itensPortfolio()
            .subscribe((portfolio: Portfolio[]) =>{
            
                expect(portfolio).toEqual(mockPortfolio);
        });

        const req = httpTestingController.expectOne(`${rdfreitasService.UrlServiceV1}portfolio`);
        expect(req.request.method).toEqual('GET');
        req.flush(mockPortfolio);
    });

    it('Deve reornar detalhes do portfolio selecionado pelo id', () => {
        const id = 2;

        spyOn(rdfreitasService, 'itensPortfolio').and.returnValue(of(mockPortfolio));

        rdfreitasService.obterPorId(id).subscribe((result) => {
            expect(result).toEqual(mockPortfolio.find((portfolio) => portfolio.id === id))
        })
    })

    afterEach(() => {
        httpTestingController.verify();
    })
})