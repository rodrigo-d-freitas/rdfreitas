import { UnitTestsComponent } from "./unit-tests.component";
import { UnitTestsService } from "./unit-tests.service";


describe('compute', () => {

    it('Deve retornar 0 se o valor for negativo', () => {
        const compute = new UnitTestsComponent();
        const result = compute.compute(-10);
        expect(result)
            .toEqual(0);
    });

    it('Deve incrementar o número', () => {
        const compute = new UnitTestsComponent();
        const result = compute.compute(10);
        expect(result)
            .toEqual(11);
    })

});

describe('Calculator Service', () => {

    it('Deve somar dois números', () => {
        const calculator = new UnitTestsService();
        const result = calculator.add(2,4);

        expect(result)
            .toBe(6, 'Resultado não esperado');
    });

    it('Deve subtrair dois números', () => {
        const calculator = new UnitTestsService();
        const result = calculator.subtract(3,2);

        expect(result)
            .toBe(1, 'Resultado não esperado')
    })
})