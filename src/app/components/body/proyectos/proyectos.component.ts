import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  misProyectos: any;
  formProyectos: FormGroup;
  proyecto: string = "";
  descripcion: string = "";
  empresa: string = "";
  duracion: string = "";
  tecnologias: string = "";
  imagenProyecto: string = "";
  linkProyecto: string = "";

  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private dataProyectos: ProyectosService, private formBuilder: FormBuilder, private tokenService: TokenService) { 
    this.formProyectos = this.formBuilder.group({
      proyecto: '',
      descripcion: '',
      empresa: '',
      duracion: '',
      tecnologias: '',
      imagenProyecto: '',
      linkProyecto: ''
    });
  }

  ngOnInit(): void {
    this.dataProyectos.verProyectos().subscribe(data => {
      this.misProyectos = data;
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  agregarProyectos(){

    this.proyecto = this.formProyectos.value.proyecto;
    this.descripcion = this.formProyectos.value.descripcion;
    this.empresa = this.formProyectos.value.empresa;
    this.duracion = this.formProyectos.value.duracion;
    this.tecnologias = this.formProyectos.value.tecnologias;
    this.imagenProyecto = this.formProyectos.value.imagenProyecto;
    this.linkProyecto = this.formProyectos.value.linkProyecto;
    
  
    let proyectos: Proyectos = {
      "proyecto": this.proyecto,
      "descripcion": this.descripcion,
      "empresa": this.empresa,
      "duracion": this.duracion,
      "tecnologias": this.tecnologias,
      "imagenProyecto": this.imagenProyecto,
      "linkProyecto": this.linkProyecto
    }

    this.dataProyectos.agregarProyectos(proyectos).subscribe(
      data =>{
        alert("Proyecto agregado con exito")

        location.href="/"
      }
    );
  }

  position!: number;

  proyectoSelect = "";
  descripcionSelect = "";
  empresaSelect = "";
  duracionSelect = "";
  tecnologiasSelect = "";
  imagenProyectoSelect = "";
  linkProyectoSelect = "";

  buscarProyectos(item: number){

    this.position = item;
    this.proyectoSelect = this.misProyectos[this.position].proyecto;
    this.descripcionSelect = this.misProyectos[this.position].descripcion;
    this.empresaSelect = this.misProyectos[this.position].empresa;
    this.duracionSelect = this.misProyectos[this.position].duracion;
    this.tecnologiasSelect = this.misProyectos[this.position].tecnologias;
    this.imagenProyectoSelect = this.misProyectos[this.position].imagenProyecto;
    this.linkProyectoSelect = this.misProyectos[this.position].imagenProyecto;
  }

  editarProyectos(item: number){

    let proyectos: Proyectos = {
      "id": this.misProyectos[item].id,
      "proyecto": this.formProyectos.value.proyecto,
      "descripcion": this.formProyectos.value.descripcion,
      "empresa": this.formProyectos.value.empresa,
      "duracion": this.formProyectos.value.duracion,
      "tecnologias": this.formProyectos.value.tecnologias,
      "imagenProyecto": this.formProyectos.value.imagenProyecto,
      "linkProyecto": this.formProyectos.value.linkProyecto
    }

    this.dataProyectos.editarProyectos(proyectos).subscribe(
      data =>{
        //mostramos una alerta
        alert("Proyecto editado con exito")

        location.href="/"
      }
    );

  }

  eliminarProyectos(item: number){
    this.dataProyectos.eliminarProyectos(this.misProyectos[item].id).subscribe(
      data =>{
        //mostramos una alerta
        alert("Proyecto eliminado")
        //Refrescamos la pagina para que se vean los nuevos datos
        location.href="/"
      }
    );
  }

}
