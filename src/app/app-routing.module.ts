import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { EmpleadosjornadaComponent } from './empleadosjornada/empleadosjornada.component';

const routes: Routes = [
{path: '', component: LoginFormComponent},
{path: 'employee', component: EmployeeComponent},
{path: 'jornadas', component: JornadasComponent},
{path: 'empleadosjornada', component: EmpleadosjornadaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
