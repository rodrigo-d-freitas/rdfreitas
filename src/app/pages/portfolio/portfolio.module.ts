import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioRoutingModule } from "./portfolio.route";
import { PortfolioCardDetalhesComponent } from "../../components/portfolio-card-detalhes/portfolio-card-detalhes.component";
import { PortfolioViewComponent } from "../portfolio-view/portfolio-view.component";
import { RouterOutlet } from "@angular/router";
import { PortfolioAppComponent } from "./portfolio.app.component";
import { RdfreitasService } from "src/app/services/rdfreitasService";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioCardDetalhesComponent,
        PortfolioViewComponent,
        PortfolioAppComponent
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        PortfolioRoutingModule,
        HttpClientModule
    ],
    providers : [
        RdfreitasService
    ],
    exports: []
})

export class PortfolioModule {}