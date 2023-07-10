import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-tests',
  templateUrl: './unit-tests.component.html',
  styles: [
  ]
})
export class UnitTestsComponent {

  compute(number) {
    if(number < 0) {
      return 0;
    }
    return number + 1;
  }

}
