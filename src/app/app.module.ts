import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { JornadasComponent } from './jornadas/jornadas.component';
import { EmpleadosjornadaComponent } from './empleadosjornada/empleadosjornada.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    EmployeeComponent,
    HeaderComponent,
    JornadasComponent,
    EmpleadosjornadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
