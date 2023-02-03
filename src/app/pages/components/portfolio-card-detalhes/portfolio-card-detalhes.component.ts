import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/Portfolio';

@Component({
  selector: 'app-portfolio-card-detalhes',
  templateUrl: './portfolio-card-detalhes.component.html',
  styles: [
  ]
})
export class PortfolioCardDetalhesComponent {

  @Input()
  portfolio: Portfolio;
}
