import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {

  constructor(private serviceHelper: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application;json'})
  }

  getCep(cep: string): Observable<any> {
    return this.serviceHelper.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
  
}
