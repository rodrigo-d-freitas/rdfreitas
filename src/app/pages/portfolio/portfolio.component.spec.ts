import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { PortfolioComponent } from "./portfolio.component"
import { DebugElement } from "@angular/core";
import { PortfolioModule } from "./portfolio.module";
import { RdfreitasService } from "src/app/services/rdfreitasService";


describe('Portfolio Component', () => {

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
                {provide: RdfreitasService, useValue: portfolioServiceSpy}
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
    })
})