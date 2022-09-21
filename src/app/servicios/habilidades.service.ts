import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelo/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  //habURL = "https://backendtonello.herokuapp.com/habilidades/";
  habURL = 'http://localhost:8080/habilidades/';

  constructor(private httpHabilidades: HttpClient) { }

  public verHabilidades(): Observable<any>{
    return this.httpHabilidades.get(this.habURL+'ver');
  }

  public buscarHabilidades(id: number): Observable<any>{
    return this.httpHabilidades.get<any>(this.habURL+`buscar/${id}`);
  }

  public agregarHabilidades(habilidades: Habilidades): Observable<any>{
    return this.httpHabilidades.post<any>(this.habURL+'new', habilidades);
  } 

  public editarHabilidades(habilidades: Habilidades): Observable<any>{
    return this.httpHabilidades.put<any>(this.habURL+'actualizar', habilidades);
  } 

  public eliminarHabilidades(id: number): Observable<any> {
    return this.httpHabilidades.delete<any>(this.habURL + `delete/${id}`);
  }
}
