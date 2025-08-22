import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';



@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {

  public listName = input.required<string>();
  
  public characters = input.required<Character[]>();
}






