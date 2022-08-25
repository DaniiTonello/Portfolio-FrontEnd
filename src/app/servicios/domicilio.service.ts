import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domicilio } from '../modelo/domicilio';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  domURL= "http://localhost:8080/domicilio/";

  constructor(private httpDomicilio: HttpClient) { }

  public verDomicilio(): Observable<any>{
    return this.httpDomicilio.get(this.domURL+'ver');
  }

  public editarDomicilio(domicilio: Domicilio): Observable<any>{
    return this.httpDomicilio.put<any>(this.domURL+'actualizar', domicilio);
  } 

  public agregarDomicilio(domicilio: Domicilio): Observable<any>{
    return this.httpDomicilio.post<any>(this.domURL+'new', domicilio);
  } 

  public eliminarDomicilio(domicilio: Domicilio): Observable<any>{
    return this.httpDomicilio.delete<any>(this.domURL+'delete{$id}');
  } 
}
