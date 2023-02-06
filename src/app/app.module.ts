import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { RdfreitasService } from './services/rdfreitasService';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RdfreitasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
