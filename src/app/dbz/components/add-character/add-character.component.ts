import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //! Para que sirve repasar

  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter():void {
    if ( this.character.name.length === 0 ) {
      alert('Ingresa algo valido');
      return;
    };

    this.onNewCharacter.emit({...this.character}); //! Repasar

    this.character = { name: '', power: 0 };

  }
}
