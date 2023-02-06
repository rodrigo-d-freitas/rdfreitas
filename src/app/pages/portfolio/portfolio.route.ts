import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";

const portfolioRouterConfig: Routes = [
    { path: '', component: PortfolioComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(portfolioRouterConfig)
    ],
    exports: [RouterModule]
})

export class PortfolioRoutingModule {}