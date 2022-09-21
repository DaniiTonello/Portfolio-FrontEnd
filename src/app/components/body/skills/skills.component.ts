import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tecnologias } from 'src/app/modelo/tecnologias';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  misTecnologias: any;
  formTecnologias: FormGroup;
  misHabilidades: any;
  formHabilidades: FormGroup;

  tecnologia: string = "";
  nivelExperiencia: string = "";
  
  habilidad: string = "";

  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private dataTecnologias: TecnologiasService,private dataHabilidades: HabilidadesService, private formBuilder: FormBuilder, private tokenService: TokenService) {
    this.formTecnologias = this.formBuilder.group({
      tecnologia:'',
      nivelExperiencia: ''
    });

    this.formHabilidades = this.formBuilder.group({
      habilidad:''
    });
   }

   ngOnInit(): void {
    this.dataTecnologias.verTecnologias().subscribe(data => {
      this.misTecnologias = data;
    });

    this.dataHabilidades.verHabilidades().subscribe(data => {
      this.misHabilidades = data;
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  agregarTecnologias(){

    this.tecnologia = this.formTecnologias.value.tecnologia;
    this.nivelExperiencia = this.formTecnologias.value.nivelExperiencia;


  
    let tecnologia: Tecnologias = {
      "tecnologia": this.tecnologia,
      "nivelExperiencia": this.nivelExperiencia,

    }

    this.dataTecnologias.agregarTecnologias(tecnologia).subscribe(
      data =>{
        alert("Informacion agregada con exito")

        location.href="/"
      }
    );
  }

  agregarHabilidades(){

    this.habilidad = this.formHabilidades.value.habilidad;
  
    let habilidad: Habilidades = {
      "habilidad": this.habilidad

    }

    this.dataHabilidades.agregarHabilidades(habilidad).subscribe(
      data =>{
        alert("Informacion agregada con exito")

        location.href="/"
      }
    );
  }

  position!: number;

  tecnologiaSelect = "";
  nivelExperienciaSelect = "";
  habilidadSelect = "";
  
  buscarTecnologias(item: number){

    this.position = item;
    this.tecnologiaSelect = this.misTecnologias[this.position].tecnologia;
    this.nivelExperienciaSelect = this.misTecnologias[this.position].nivelExperiencia;

  }

  buscarHabilidades(item: number){

    this.position = item;
    this.habilidadSelect = this.misHabilidades[this.position].habilidad;

  }

  editarTecnologias(item: number){

    let tecnologia: Tecnologias = {
      "id": this.misTecnologias[item].id,
      "tecnologia": this.formTecnologias.value.tecnologia,
      "nivelExperiencia": this.formTecnologias.value.nivelExperiencia
    }

    this.dataTecnologias.editarTecnologias(tecnologia).subscribe(
      data =>{
        //mostramos una alerta
        alert("Informacion editada con exito")

        location.href="/"
      }
    );

  }

  editarHabilidades(item: number){

    let habilidad: Habilidades = {
      "id": this.misHabilidades[item].id,
      "habilidad": this.formHabilidades.value.habilidad
    }

    this.dataHabilidades.editarHabilidades(habilidad).subscribe(
      data =>{
        //mostramos una alerta
        alert("Informacion editada con exito")

        location.href="/"
      }
    );

  }

  eliminarTecnologias(item: number){
    this.dataTecnologias.eliminarTecnologias(this.misTecnologias[item].id).subscribe(
      data =>{
        //mostramos una alerta
        alert("experiencia eliminada")
        //Refrescamos la pagina para que se vean los nuevos datos
        location.href="/"
      }
    );
  }

  eliminarHabilidades(item: number){
    this.dataHabilidades.eliminarHabilidades(this.misHabilidades[item].id).subscribe(
      data =>{
        //mostramos una alerta
        alert("Habilidad eliminada")
        //Refrescamos la pagina para que se vean los nuevos datos
        location.href="/"
      }
    );
  }

}
