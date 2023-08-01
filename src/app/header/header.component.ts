import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/Menu';
import { RdfreitasService } from '../services/rdfreitasService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rdfreitasService : RdfreitasService) { }

  public itensMenu: Menu[];

  ngOnInit() {
    this.rdfreitasService.construirMenu()
      .subscribe(
        itens => {
          this.itensMenu = itens;
        },
        error => console.log(error)
      );
  }
}
