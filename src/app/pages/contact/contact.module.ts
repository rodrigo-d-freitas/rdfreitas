import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact.route";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: []
})

export class ContactModule {}