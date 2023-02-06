import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/services/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Input()
  menu : Menu;

}
