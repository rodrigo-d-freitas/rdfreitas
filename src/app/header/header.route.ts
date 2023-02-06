import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header.component";

const headerRouterConfig: Routes = [
    { path: '', component : HeaderComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(headerRouterConfig)
    ],
    exports: [RouterModule]
})

export class HeaderRoutingModule {}