import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css',
})
export class CharacterAppComponent {
  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: 10000,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);
    console.log({ newCharacter });
    this.resetFields();
  }
  characters() {
    throw new Error('Method not implemented.');
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
