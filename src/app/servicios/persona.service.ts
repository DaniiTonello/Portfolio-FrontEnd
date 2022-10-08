import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persURL= "https://backendtonello.herokuapp.com/persona/";
  //persURL = 'http://localhost:8080/persona/';

  constructor(private httpPersona: HttpClient) {}

  public verPersonas(): Observable<any>{
    return this.httpPersona.get(this.persURL+'ver');
  }

  public editarPersona(persona: Persona): Observable<any>{
    return this.httpPersona.put<any>(this.persURL+'actualizar', persona);
  } 

}
