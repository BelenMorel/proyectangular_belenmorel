import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  constructor(private http:HttpClient) { }

    public obtenerDatos():Observable<any>{

      return this.http.get('./assets/data/novedades.json');
  }

}
