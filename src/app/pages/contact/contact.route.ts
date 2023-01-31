import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";

const contactRouterConfig: Routes = [
    { path: '', component: ContactComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(contactRouterConfig)
    ],
    exports: [RouterModule]
})

export class ContactRoutingModule {}