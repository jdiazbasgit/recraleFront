import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { EmpleadosjornadaComponent } from './empleadosjornada/empleadosjornada.component';
import { ListadosComponent } from './listados/listados.component';

const routes: Routes = [
{path: '', component: LoginFormComponent},
{path: 'employee', component: EmployeeComponent},
{path: 'jornadas', component: JornadasComponent},
{path: 'accesos', component: ListadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
