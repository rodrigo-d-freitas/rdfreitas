import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { PortfolioViewComponent } from "../portfolio-view/portfolio-view.component";
import { PortfolioAppComponent } from "./portfolio.app.component";
import { PortfolioComponent } from "./portfolio.component";

const portfolioRouterConfig: Routes = [
    { path: '', component: PortfolioAppComponent,
        children: [
            { path: '', component: PortfolioComponent},
            { path: 'visualizar/:id', component: PortfolioViewComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(portfolioRouterConfig)
    ],
    exports: [RouterModule]
})

export class PortfolioRoutingModule {}