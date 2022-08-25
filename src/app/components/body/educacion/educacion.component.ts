import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelo/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  miEducacion: any;
  formEducacion: FormGroup;

  constructor(private datosEducacion: EducacionService, private formBuilder: FormBuilder) { 
    this.formEducacion = this.formBuilder.group({
      establecimiento:'',
      carrera: '',
      curso: '',
      duracion: ''
      
    });
  }

  ngOnInit(): void {
    this.datosEducacion.verEducacion().subscribe(data => {
      this.miEducacion = data;
    });
  }

  agregarEducacion(){

    this.establecimientoSelect = this.miEducacion.value;
    this.carreraSelect = this.miEducacion.value;
    this.cursoSelect = this.miEducacion.value;
    this.duracionSelect = this.miEducacion.value;
  
    let educacion: Educacion = {
        "establecimiento": this.formEducacion.value,
        "carrera": this.formEducacion.value,
        "curso": this.formEducacion.value,
        "duracion": this.formEducacion.value
      
    }

    this.datosEducacion.agregarEducacion(educacion).subscribe(
      data =>{
        //mostramos una alerta
        alert("Informacion editada con exito")

        location.href="/"
      }
    );
  }

  position!: number;

  establecimientoSelect = "";
  carreraSelect = "";
  cursoSelect = "";
  duracionSelect = "";
  
  buscarEducacion(item: number){

    this.position = item;
    this.establecimientoSelect = this.miEducacion[this.position].establecimiento;
    this.carreraSelect = this.miEducacion[this.position].carrera;
    this.cursoSelect = this.miEducacion[this.position].curso;
    this.duracionSelect = this.miEducacion[this.position].duracion;
  }

  editarEducacion(item: number){

    let educacion: Educacion = {
      "id": this.miEducacion[item].id,
      "establecimiento": this.formEducacion.value.establecimiento,
      "carrera": this.formEducacion.value.carrera,
      "curso": this.formEducacion.value.curso,
      "duracion": this.formEducacion.value.duracion
    }

    this.datosEducacion.editarEducacion(educacion).subscribe(
      data =>{
        //mostramos una alerta
        alert("Informacion editada con exito")

        location.href="/"
      }
    );

  }

  

  

  eliminarEducacion(item: number){

    this.datosEducacion.agregarEducacion(this.miEducacion[item].id).subscribe(
      data =>{
        alert("Educacion eliminada con exito")

        location.href="/"
      }
    );

  }

}
