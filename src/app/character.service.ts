import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // injects http in a private property
  // injects message handling
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    // create method to handle frequent calls of MessageService injection
    private log(message: string) {
      this.messageService.add(`CharacterService: ${message}`);
    }

    // sets url for character search
    private characterUrl = 'https://swapi.dev/api/people';

    // pulls characters from the server
    // adds message to message injection to identify that characters were pulled or sends error message if failed
    getChars(): Observable<Character[]>{
      return this.http.get<Character[]>(this.characterUrl).pipe(tap(_ => this.log('pulled characters')), catchError(this.handleError<Character[]>('getCharacters', [])));
    }

    // get characters whose name contains search criteria
    searchChar(term: string): Observable<Character[]> {
      if (!term.trim()) {
        // if no match, return nothing
        return of([]);
        console.log();
      }
      
      return this.http.get<Character[]>(`${this.characterUrl}/?search=${term}`).pipe(tap(x => x.length?
        this.log(`found characters matching "${term}"`) :
        this.log(`Sorry, cant find a character matching "${term}"`)),
        catchError(this.handleError<Character[]>('searchCharacter', [])));

    }

    // should handle faild Http pulls while allowing hte app to continue working
    // @param operation - names the failed operation
    // @param result - should return observable result
    private handleError<T>(operation = 'operation' , result?: T) {
      return (error: any): Observable<T> => {

        console.error(error)

        this.log(`${operation} failed: ${error.message}`);

        return of(result as T);
      };
    }
}
