import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../modelo/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  expURL= "http://localhost:8080/experienciaLaboral/";

  constructor(private httpExperienciaLaboral: HttpClient) { }

  public verExperienciaLaboral(): Observable<any>{
    return this.httpExperienciaLaboral.get(this.expURL+'ver');
  }

  public editarExperienciaLaboral(experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpExperienciaLaboral.put<any>(this.expURL+'actualizar', experienciaLaboral);
  } 

  public agregarExperienciaLaboral(experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpExperienciaLaboral.post<any>(this.expURL+'new', experienciaLaboral);
  } 

  public eliminarExperienciaLaboral(experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpExperienciaLaboral.delete<any>(this.expURL+'delete{$id}');
  } 
}
