import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService { // Este singleton si se usa con provideIn root se puede inyectar en TODA LA APLICACION lo cual lo vuelve asombroso!!!!

  public character: Character[] = [{
    id:    uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id:    uuid(),
    name: 'Goku',
    power: 9750
  },
  {
    id:    uuid(),
    name: 'Vegeta',
    power: 7500
  }];


  saveCharacter(character: Character):void {
    const newCharacter: Character = {  ...character, id: uuid() }; // Se quita la referencia con esto
    this.character.push(newCharacter);
  }

  // deleteCharacter( i: number):void {
  //   this.character.splice(i, 1);
  // }

  deleteCharacterById( id: string ):void {
    this.character = this.character.filter( character => character.id !== id )
  }

}
