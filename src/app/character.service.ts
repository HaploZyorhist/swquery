import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
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

    getChars(): Observable<Character[]>{
      return this.http.get<Character[]>(this.characterUrl)
    }

    // get characters whose name contains search criteria
    searchChar(term: string): Observable<Character[]> {
      if (!term.trim()) {
        // if no match, return nothing
        return of([]);
      }
      
      return this.http.get<Character[]>(`${this.characterUrl}/?name=${term}`).pipe(tap(x => x.length?
        this.log(`found characters matching "${term}"`) :
        this.log(`no heroes matching "${term}"`),
        catchError(this.handleError<Characterp[>('searchCharacter', [])));

    }
}
