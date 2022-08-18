import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LogoAPComponent } from './components/header/logo-ap/logo-ap.component';
import { RedesSocialesComponent } from './components/header/redes-sociales/redes-sociales.component';
import { BodyComponent } from './components/body/body/body.component';
import { AcercaDeComponent } from './components/body/acerca-de/acerca-de.component';
import { BannerComponent } from './components/body/banner/banner.component';
import { EducacionComponent } from './components/body/educacion/educacion.component';
import { ExperienciaComponent } from './components/body/experiencia/experiencia.component';
import { HeadingComponent } from './components/body/heading/heading.component';
import { NombreComponent } from './components/body/nombre/nombre.component';
import { PerfilComponent } from './components/body/perfil/perfil.component';
import { ProyectosComponent } from './components/body/proyectos/proyectos.component';
import { SeccionComponent } from './components/body/seccion/seccion.component';
import { SkillsComponent } from './components/body/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './portfolio/home/home.component';
import { ButtonLoginComponent } from './components/header/button-login/button-login.component';
import { BarraNavegacionComponent } from './components/header/barra-navegacion/barra-navegacion.component';
import { CarouselComponent } from './portfolio/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesSocialesComponent,
    BodyComponent,
    AcercaDeComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    HeadingComponent,
    NombreComponent,
    PerfilComponent,
    ProyectosComponent,
    SeccionComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    ButtonLoginComponent,
    BarraNavegacionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
