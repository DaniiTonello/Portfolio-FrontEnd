import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologias } from '../modelo/tecnologias'; 

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  //tecURL = "https://backendtonello.herokuapp.com/tecnologias/";
  tecURL = 'http://localhost:8080/tecnologias/';

  constructor(private httpTecnologias: HttpClient) { }

  public verTecnologias(): Observable<any>{
    return this.httpTecnologias.get(this.tecURL+'ver');
  }

  public buscarTecnologias(id: number): Observable<any>{
    return this.httpTecnologias.get<any>(this.tecURL+`buscar/${id}`);
  }

  public agregarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.post<any>(this.tecURL+'new', tecnologias);
  } 

  public editarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.put<any>(this.tecURL+'actualizar', tecnologias);
  } 

  public eliminarTecnologias(id: number): Observable<any> {
    return this.httpTecnologias.delete<any>(this.tecURL + `delete/${id}`);
  }
}
