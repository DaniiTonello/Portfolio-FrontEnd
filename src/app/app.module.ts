import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/header/logo-ap/logo-ap.component';
import { RedesSocialesComponent } from './components/header/redes-sociales/redes-sociales.component';
import { AcercaDeComponent } from './components/body/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/body/educacion/educacion.component';
import { ExperienciaComponent } from './components/body/experiencia/experiencia.component';
import { ProyectosComponent } from './components/body/proyectos/proyectos.component';
import { SkillsComponent } from './components/body/skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './portfolio/home/home.component';
import { ButtonLoginComponent } from './components/header/button-login/button-login.component';
import { BarraNavegacionComponent } from './components/header/barra-navegacion/barra-navegacion.component';
import { CarouselComponent } from './portfolio/carousel/carousel.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './portfolio/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    RedesSocialesComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    HomeComponent,
    ButtonLoginComponent,
    BarraNavegacionComponent,
    CarouselComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
