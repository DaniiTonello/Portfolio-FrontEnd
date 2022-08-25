import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologias } from '../modelo/tecnologias'; 

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  tecURL= "http://localhost:8080/tecnologias/";

  constructor(private httpTecnologias: HttpClient) { }

  public verTecnologias(): Observable<any>{
    return this.httpTecnologias.get(this.tecURL+'ver');
  }

  public editarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.put<any>(this.tecURL+'actualizar', tecnologias);
  } 

  public agregarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.post<any>(this.tecURL+'new', tecnologias);
  } 

  public eliminarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.delete<any>(this.tecURL+'delete{$id}');
  } 
}
