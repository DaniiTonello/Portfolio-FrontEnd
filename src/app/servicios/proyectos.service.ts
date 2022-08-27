import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyURL= "http://localhost:8080/proyectos/";

  constructor(private httpProyectos: HttpClient) { }

  public verProyectos(): Observable<any>{
    return this.httpProyectos.get(this.proyURL+'ver');
  }

  public buscarProyectos(id: number): Observable<any>{
    return this.httpProyectos.get<any>(this.proyURL+`buscar/${id}`);
  }

  public agregarProyectos(proyectos: Proyectos): Observable<any>{
    return this.httpProyectos.post<any>(this.proyURL+'new', proyectos);
  } 

  public editarProyectos(proyectos: Proyectos): Observable<any>{
    return this.httpProyectos.put<any>(this.proyURL+'actualizar', proyectos);
  } 

  public eliminarProyectos(id: number): Observable<any> {
    return this.httpProyectos.delete<any>(this.proyURL + `delete/${id}`);
  }

}
