import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})


export class CharacterSearchComponent implements OnInit {

  // sets characters$ as an observable
  character$: Observable<Character[]>;

  // sets private method for searching
  private searchTerms = new Subject<string>();

  constructor(
    // sets private method for using character.service
    private characterService: CharacterService
  ) { }

  // pushes search terms into the observable
  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.character$ = this.searchTerms.pipe(
      // wait after keystroacks to reduce frequent http pull attempts
      debounceTime(300),

      // ignore if same as previous turm
      distinctUntilChanged(),

      // switch to new search if the term changed
      switchMap((term: string) => this.characterService.searchChar(term)),
    );
  }

}
