import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { HeaderRoutingModule } from "./header.route";
import { MenuComponent } from "../components/menu/menu.component";

@NgModule ({
    declarations : [
        HeaderComponent,
        MenuComponent
    ],
    imports : [
        CommonModule,
        HeaderRoutingModule
    ],
    exports : [
        HeaderComponent
    ]
})

export class HeaderModule {}