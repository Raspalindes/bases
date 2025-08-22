import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../../components/dragonball/character-list/character-list.component";
import { CharacterAppComponent } from "../../../components/dragonball/character-app/character-add.component";
interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, CharacterAppComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
  // poweClasses = computed(()=>{
  //   return {
  //     'text-danger': true,
  //   };
  // });

  
}
