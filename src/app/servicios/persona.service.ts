import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persURL= "http://localhost:8080/persona/";

  public verPersonas(): Observable<any>{
    return this.httpPersona.get(this.persURL+'ver');
  }

  constructor(private httpPersona: HttpClient) {
    
   }
}
