import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  miPersona: any;

  constructor(private datosPersona: PersonaService) { }
  ngOnInit(): void {
    this.datosPersona.verPersonas().subscribe(data => {
      this.miPersona = data;
      console.log(this.miPersona)
    });
  }

}
