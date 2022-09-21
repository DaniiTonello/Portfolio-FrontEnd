import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../modelo/experiencia-laboral';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  //expURL = "https://backendtonello.herokuapp.com/experiencia-laboral/";
  expURL = 'http://localhost:8080/experiencia-laboral/';

  constructor(private httpExperienciaLaboral: HttpClient) { }

  public verExperienciaLaboral(): Observable<any>{
    return this.httpExperienciaLaboral.get(this.expURL+'ver');
  }

  public buscarExperienciaLaboral(id: number): Observable<any>{
    return this.httpExperienciaLaboral.get<any>(this.expURL+`buscar/${id}`);
  }

  public agregarExperienciaLaboral(experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpExperienciaLaboral.post<any>(this.expURL+'new', experienciaLaboral);
  } 

  public editarExperienciaLaboral(experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpExperienciaLaboral.put<any>(this.expURL+'actualizar', experienciaLaboral);
  } 

  public eliminarExperienciaLaboral(id: number): Observable<any> {
    return this.httpExperienciaLaboral.delete<any>(this.expURL + `delete/${id}`);
  }
}
