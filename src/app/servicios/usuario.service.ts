import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  uURL= "http://localhost:8080/usuario/";

  constructor(private httpUsuario: HttpClient) { }

  public verUsuario(): Observable<any>{
    return this.httpUsuario.get(this.uURL+'ver');
  }

  public buscarUsuario(id: number): Observable<any>{
    return this.httpUsuario.get<any>(this.uURL+`buscar/${id}`);
  }

  public agregarUsuario(usuario: Usuario): Observable<any>{
    return this.httpUsuario.post<any>(this.uURL+'new', usuario);
  } 

  public editarUsuario(usuario: Usuario): Observable<any>{
    return this.httpUsuario.put<any>(this.uURL+'actualizar', usuario);
  } 

  public eliminarUsuario(id: number): Observable<any> {
    return this.httpUsuario.delete<any>(this.uURL + `delete/${id}`);
  }
}
