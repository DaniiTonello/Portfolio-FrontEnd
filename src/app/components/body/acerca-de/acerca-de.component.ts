import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  miPersona: any;

  constructor(private datosPersona: PersonaService) { }
  ngOnInit(): void {
    this.datosPersona.verPersonas().subscribe(data => {
      this.miPersona = data;
    });
  }

}