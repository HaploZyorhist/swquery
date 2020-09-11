import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { Homeworld } from '../homeworld';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  // sets char array
  characters: Character[];
  homeworld: Homeworld[];

  constructor() { }

  ngOnInit(): void {
  }

}
