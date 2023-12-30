import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter()

  onDeleteCharacter( index:number ):void {
    // TODO: Poner ID en lugar de index a los personajes
    this.onDelete.emit(index);
  }

}