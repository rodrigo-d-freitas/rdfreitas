import { LoggerService } from "./logger.service";
import { UnitTestsComponent } from "./unit-tests.component";
import { UnitTestsService } from "./unit-tests.service";
import {TestBed, ComponentFixture} from '@angular/core/testing';


describe('compute', () => {

    let compute: UnitTestsComponent;

    beforeEach(() => {
        compute = new UnitTestsComponent();
    })

    it('Deve retornar 0 se o valor for negativo', () => {
        
        const result = compute.compute(-10);
        expect(result)
            .toEqual(0, 'Resultado não deu 0');
    });

    it('Deve incrementar o número', () => {
    
        const result = compute.compute(10);
        expect(result)
            .toEqual(11, 'número não foi incrementado');
    })

});

describe('Calculator Service', () => {

    let calculator: UnitTestsService;
    let logger: any;

    beforeEach(() => {
        logger = jasmine.createSpyObj('LoggerService', ["log"]);
        
        TestBed.configureTestingModule({
            providers: [
                UnitTestsService,
                {provide: LoggerService, useValue: logger}
            ]
        })
        
        calculator = TestBed.inject(UnitTestsService);
    })

    it('Deve somar dois números', () => {
        const result = calculator.add(2,4);

        expect(result)
            .toBe(6, 'Resultado não esperado');

        expect(logger.log)
            .toHaveBeenCalledTimes(1);
    });

    it('Deve subtrair dois números', () => {
        const result = calculator.subtract(3,2);

        expect(result)
            .toBe(1, 'Resultado não esperado');

        expect(logger.log)
            .toHaveBeenCalledTimes(1);
    })
})