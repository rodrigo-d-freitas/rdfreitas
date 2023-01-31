import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact.route";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule
    ],
    exports: []
})

export class ContactModule {}