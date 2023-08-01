import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { PortfolioComponent } from "./portfolio.component"
import { DebugElement } from "@angular/core";
import { PortfolioModule } from "./portfolio.module";
import { RdfreitasService } from "src/app/services/rdfreitasService";
import { of } from "rxjs";

class RdfreitasServiceMock {
    itensPortfolio() {
      // Simule os dados retornados pelo serviço real
      const mockData = [ 
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
      return of(mockData);
    }
  }

describe('Portfolio', () => {

    let fixture: ComponentFixture<PortfolioComponent>;
    let component: PortfolioComponent;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {

        const portfolioServiceSpy = jasmine.createSpyObj('RdfreitasService', ['itensPortfolio'])

        TestBed.configureTestingModule({
            imports : [
                PortfolioModule
            ],
            providers: [
                {provide: RdfreitasService, useClass: RdfreitasServiceMock}
            ]
        }).compileComponents()
        .then(() => {

            fixture = TestBed.createComponent(PortfolioComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
        })
    }));

    it('Deve criar o componente Portfolio', () => {

        expect(component).toBeTruthy();
    });

    it('Deve montar a lista de portfolio', () => {

        component.ngOnInit();
        expect(component.itensPortfolio).toBeTruthy();
    })
})