import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // injects http in a private property
  constructor(
    private http: HttpClient,) { }

    private characterUrl = 'https://swapi.dev/api/';

    getChars(): Observable<Char[]>{
      return this.http.get<Char[]>(this.characterUrl)
    }
}
