import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public character: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9750
  },
  {
    name: 'Vegeta',
    power: 7500
  }];


  saveCharacter(character: Character):void {
    this.character.push(character);
  }

  deleteCharacter( i: number):void {
    this.character.splice(i, 1);
  }

}
