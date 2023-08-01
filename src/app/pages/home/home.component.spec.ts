import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { HomeComponent } from "./home.component"
import { HomeModule } from "./home.module";
import { InvestService } from "src/app/services/investService";
import { DebugElement } from "@angular/core";


describe('Home', () => {

    let fixture : ComponentFixture<HomeComponent>;
    let component : HomeComponent;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                
            ],
            declarations: [
                HomeComponent
            ],
            providers: [
                InvestService
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HomeComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;

            })
    }));

    it('Deve criar o componente Home', () => {
        expect(component).toBeTruthy();
    });

    it('Verificando se existe só 1 elemento h1 na página', () => {
        const elH1 = fixture.nativeElement.querySelector('h1');
        const allElH1 = fixture.nativeElement.querySelectorAll('h1');

        expect(elH1).toBeTruthy();
        expect(allElH1.length).toBe(1);
    })
})