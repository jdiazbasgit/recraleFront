import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { RectificadosComponent } from './rectificados.component';
import { HomeComponent } from './home.component';
import { PlanificadoComponent } from './planificado.component';
import { RecambiosComponent } from './recambios.component';
import { TornoComponent } from './torno.component';
import { MecanizadoComponent } from './mecanizado.component';
import { ExtraccionComponent } from './extraccion.component';
import { HelicoilsComponent } from './helicoils.component';
import { NoticiasComponent } from './noticias.component';
import { TarjetaComponent } from './tarjeta.component';

import { AccesoComponent } from './acceso/acceso.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RectificadosComponent,
    HomeComponent,
    PlanificadoComponent,
    RecambiosComponent,
    TornoComponent,
    MecanizadoComponent,
    ExtraccionComponent,
    HelicoilsComponent,
    NoticiasComponent,
    TarjetaComponent,
    AccesoComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
