import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/app/models/Portfolio';
import { RdfreitasService } from 'src/app/services/rdfreitasService';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styles: [
  ]
})
export class PortfolioViewComponent implements OnInit {

  portfolio : Observable<Portfolio>;

  constructor(
    private route : ActivatedRoute, 
    private rdfreitasService : RdfreitasService,
    private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.portfolio = this.rdfreitasService.obterPorId(params['id']);
     });
  }

  retornar() {
    this.router.navigate(['/portfolio']);
  }
}
