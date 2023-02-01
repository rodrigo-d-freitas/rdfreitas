import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioRoutingModule } from "./portfolio.route";
import { PortfolioCardDetalhesComponent } from "../components/portfolio-card-detalhes/portfolio-card-detalhes.component";

@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioCardDetalhesComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule
    ],
    exports: []
})

export class PortfolioModule {}