import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  uURL= "http://localhost:8080/tecnologias/";

  constructor(private httpTecnologias: HttpClient) { }

  public verTecnologias(): Observable<any>{
    return this.httpTecnologias.get(this.uURL+'ver');
  }

  public editarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.put<any>(this.uURL+'actualizar', tecnologias);
  } 

  public agregarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.post<any>(this.uURL+'new', tecnologias);
  } 

  public eliminarTecnologias(tecnologias: Tecnologias): Observable<any>{
    return this.httpTecnologias.delete<any>(this.uURL+'delete{$id}');
  }
}
