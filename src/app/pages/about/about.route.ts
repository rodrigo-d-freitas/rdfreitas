import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

const aboutRouterConfig: Routes = [
    { path: '', component: AboutComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRouterConfig)
    ],
    exports: [RouterModule]
})

export class AboutRoutingModule {}