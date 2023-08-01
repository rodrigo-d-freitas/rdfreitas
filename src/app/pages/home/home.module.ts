import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.route";
import { InvestService } from "src/app/services/investService";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        HomeRoutingModule
    ],
    exports:[],
    providers:[
        InvestService
    ]
})

export class HomeModule {}