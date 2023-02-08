import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/models/Portfolio';
import { RdfreitasService } from 'src/app/services/rdfreitasService';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styles: [
  ]
})
export class PortfolioViewComponent implements OnInit {

  portfolio : Portfolio;

  constructor(private route : ActivatedRoute, public rdfreitasService : RdfreitasService) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.portfolio = this.rdfreitasService.obterPorId(params['id']);
     });
  }

  
}
