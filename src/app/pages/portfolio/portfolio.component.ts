import { Component } from '@angular/core';
import { Portfolio } from 'src/app/models/Portfolio';
import { RdfreitasService } from 'src/app/services/rdfreitasService';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private rdfreitasService : RdfreitasService) {}

  public itensPortfolio : Portfolio[];

  ngOnInit() {
    this.rdfreitasService.itensPortfolio()
    .subscribe(
      itens => {
        this.itensPortfolio = itens;
      },
      error => console.log(error)
    );
  }
  
}
