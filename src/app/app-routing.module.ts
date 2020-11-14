import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RectificadosComponent} from './rectificados.component'
import {PlanificadoComponent} from './planificado.component'
import {HomeComponent} from './home.component'
import {ExtraccionComponent} from './extraccion.component'
import {HelicoilsComponent} from './helicoils.component'
import { MecanizadoComponent } from './mecanizado.component';
import { RecambiosComponent } from './recambios.component';
import { TornoComponent } from './torno.component';
import { NoticiasComponent } from './noticias.component';
import { TarjetaComponent } from './tarjeta.component';
import { AccesoComponent } from './acceso/acceso.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'rectificados',component:RectificadosComponent},
  {path:'planificado',component:PlanificadoComponent},
  {path:'extraccion',component:ExtraccionComponent},
  {path:'helicoils',component:HelicoilsComponent},
  {path:'mecanizado',component:MecanizadoComponent},
  {path:'recambios',component:RecambiosComponent},
  {path:'torno',component:TornoComponent},
  {path:'noticias',component:NoticiasComponent},
  {path:'tarjeta',component:TarjetaComponent },
  {path:'acceso',component:AccesoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
