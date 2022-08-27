import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../modelo/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL= "http://localhost:8080/educacion/";

  constructor(private httpEducacion: HttpClient) { }

  public verEducacion(): Observable<any>{
    return this.httpEducacion.get(this.eduURL+'ver');
  }

  public buscarEducacion(id: number): Observable<any>{
    return this.httpEducacion.get<any>(this.eduURL+`buscar/${id}`);
  }

  public agregarEducacion(educacion: Educacion): Observable<any>{
    return this.httpEducacion.post<any>(this.eduURL+'new', educacion);
  } 

  public editarEducacion(educacion: Educacion): Observable<any>{
    return this.httpEducacion.put<any>(this.eduURL+'actualizar', educacion);
  } 
  
  public eliminarEducacion(id: number): Observable<any> {
    return this.httpEducacion.delete<any>(this.eduURL + `delete/${id}`);
  }
}
