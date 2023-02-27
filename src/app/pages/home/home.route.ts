import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const homeRouterConfig: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRouterConfig)
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule {}