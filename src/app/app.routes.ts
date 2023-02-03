import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./pages/not-found/not-found.component";


export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'portfolio', 
            loadChildren: () => import('./pages/portfolio/portfolio.module')
            .then(m => m.PortfolioModule)},
    {path: 'about', 
            loadChildren: () => import('./pages/about/about.module')
            .then(m => m.AboutModule)},
    {path: 'contact', 
            loadChildren: () => import('./pages/contact/contact.module')
            .then(m => m.ContactModule)},
    {path: '**', component: NotFoundComponent}
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}