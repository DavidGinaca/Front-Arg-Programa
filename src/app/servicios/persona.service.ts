import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = environment.URL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'personas/lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `personas/detail/${18}`);
  }

  public save(Persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'personas/create', Persona);
  }

  public update(id: number, Persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `personas/update/${18}`, Persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${18}`);
  }
}
