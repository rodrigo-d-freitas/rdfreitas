import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioRoutingModule } from "./portfolio.route";

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule
    ],
    exports: []
})

export class PortfolioModule {}