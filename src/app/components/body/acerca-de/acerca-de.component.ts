import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Persona } from 'src/app/modelo/persona';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  miPersona: any;
  formPersona: FormGroup;

  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private datosPersona: PersonaService, private formBuilder: FormBuilder, private tokenService: TokenService) { 
    this.formPersona = this.formBuilder.group({
      nombre: '',
      apellido:'',
      pais: '',
      provincia: '',
      acercaDe:'',
      imagen: ''
    });
  }

  ngOnInit(): void {
    this.datosPersona.verPersonas().subscribe(data => {
      this.miPersona = data;
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  //este auxiliar lo usaremos para recoger el elemento que vamos a selecionar
  position!: number;
  //con esta variable recogeremos la info de los campos
  nombreSelect = "";
  apellidoSelect = "";
  paisSelect = "";
  provinciaSelect = "";
  acercaDeSelect = "";
  imagenSelect = "";
  buscarPersona(item: number){
    //Le pasamos los valores a las variables de arriba
    this.position = item;
    this.nombreSelect = this.miPersona[this.position].nombre;
    this.apellidoSelect = this.miPersona[this.position].apellido;
    this.paisSelect = this.miPersona[this.position].pais;
    this.provinciaSelect = this.miPersona[this.position].provincia;
    this.acercaDeSelect = this.miPersona[this.position].acercaDe;
    this.imagenSelect = this.miPersona[this.position].imagen;
  }

  editarPersona(item: number){
    //instanciamos un objeto del tipo experiencia como lo tenemos en el modelo deben ser los nombres de las variable
    //A diferencia del agregar a este metodo tenemos que pasarle el id como lo haciamos al editar
    let persona: Persona = {
      "id": this.miPersona[item].id,
      "nombre": this.formPersona.value.nombre,
      "apellido": this.formPersona.value.apellido,
      "pais": this.formPersona.value.pais,
      "provincia": this.formPersona.value.provincia,
      "acercaDe": this.formPersona.value.acercaDe,
      "imagen": this.formPersona.value.imagen
    }

    this.datosPersona.editarPersona(persona).subscribe(
      data =>{
        //mostramos una alerta
        alert("informacion editada con exito")
        //Refrescamos la pagina para que se vean los nuevos datos
        location.href="/"
      }
    );

  }


}