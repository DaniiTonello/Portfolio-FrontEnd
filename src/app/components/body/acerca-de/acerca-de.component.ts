import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Persona } from 'src/app/modelo/persona';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  miPersona: any;
  formPersona: FormGroup;

  constructor(private datosPersona: PersonaService, private formBuilder: FormBuilder) { 
    this.formPersona = this.formBuilder.group({
      nombre: '',
      apellido:'',
      acercaDe:''
    });
  }

  ngOnInit(): void {
    this.datosPersona.verPersonas().subscribe(data => {
      this.miPersona = data;
    });
  }

  //este auxiliar lo usaremos para recoger el elemento que vamos a selecionar
  position!: number;
  //con esta variable recogeremos la info de los campos
  nombreSelect = "";
  apellidoSelect = "";
  acercaDeSelect = "";
  buscarPersona(item: number){
    //Le pasamos los valores a las variables de arriba
    this.position = item;
    this.nombreSelect = this.miPersona[this.position].nombre;
    this.apellidoSelect = this.miPersona[this.position].apellido;
    this.acercaDeSelect = this.miPersona[this.position].acercaDe;
  }

  editarPersona(item: number){
    //instanciamos un objeto del tipo experiencia como lo tenemos en el modelo deben ser los nombres de las variable
    //A diferencia del agregar a este metodo tenemos que pasarle el id como lo haciamos al editar
    let persona: Persona = {
      "id": this.miPersona[item].id,
      "nombre": this.formPersona.value.nombre,
      "apellido": this.formPersona.value.apellido,
      "acercaDe": this.formPersona.value.acercaDe
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