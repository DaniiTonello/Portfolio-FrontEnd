import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ExperienciaLaboral } from 'src/app/modelo/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  misExperiencias: any;
  formExperiencias: FormGroup;
  puesto: string = "";
  duracion: string = "";
  ubicacion: string = "";
  empresa: string = "";
  descripcion: string = "";
 


  constructor(private dataExperiencia: ExperienciaLaboralService, private formBuilder: FormBuilder) {
    this.formExperiencias = this.formBuilder.group({
      puesto:'',
      duracion: '',
      ubicacion: '',
      empresa: '',
      descripcion: ''
      
    });
  }

  ngOnInit(): void {
    this.dataExperiencia.verExperienciaLaboral().subscribe(data => {
      this.misExperiencias = data;
    });
  }

  agregarExperienciaLaboral(){

    this.puesto = this.formExperiencias.value.puesto;
    this.duracion = this.formExperiencias.value.duracion;
    this.ubicacion = this.formExperiencias.value.ubicacion;
    this.empresa = this.formExperiencias.value.empresa;
    this.descripcion = this.formExperiencias.value.descripcion;
  
    let experienciaLaboral: ExperienciaLaboral = {
        "puesto": this.puesto,
        "duracion": this.duracion,
        "ubicacion": this.ubicacion,
        "empresa": this.empresa,
        "descripcion": this.descripcion
      
    }

    this.dataExperiencia.agregarExperienciaLaboral(experienciaLaboral).subscribe(
      data =>{
        alert("Informacion agregada con exito")

        location.href="/"
      }
    );
  }

  position!: number;

  puestoSelect = "";
  duracionSelect = "";
  ubicacionSelect = "";
  empresaSelect = "";
  descripcionSelect = "";
  
  buscarExperienciaLaboral(item: number){

    this.position = item;
    this.puestoSelect = this.misExperiencias[this.position].puesto;
    this.duracionSelect = this.misExperiencias[this.position].duracion;
    this.ubicacionSelect = this.misExperiencias[this.position].ubicacion;
    this.empresaSelect = this.misExperiencias[this.position].empresa;
    this.descripcionSelect = this.misExperiencias[this.position].descripcion;
  }

  editarExperienciaLaboral(item: number){

    let experienciaLaboral: ExperienciaLaboral = {
      "id": this.misExperiencias[item].id,
      "puesto": this.formExperiencias.value.puesto,
      "duracion": this.formExperiencias.value.duracion,
      "ubicacion": this.formExperiencias.value.ubicacion,
      "empresa": this.formExperiencias.value.empresa,
      "descripcion": this.formExperiencias.value.descripcion
    }

    this.dataExperiencia.editarExperienciaLaboral(experienciaLaboral).subscribe(
      data =>{
        //mostramos una alerta
        alert("Informacion editada con exito")

        location.href="/"
      }
    );

  }

  eliminarExperienciaLaboral(item: number){
    this.dataExperiencia.eliminarExperienciaLaboral(this.misExperiencias[item].id).subscribe(
      data =>{
        //mostramos una alerta
        alert("experiencia eliminada")
        //Refrescamos la pagina para que se vean los nuevos datos
        location.href="/"
      }
    );
  }

}
