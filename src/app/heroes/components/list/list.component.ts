import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Captain America', 'Hulk'];
  public deletedHero?: string;
  public msg?:any;
  newHero: string = '';

  removeLastHero():void {
    this.deletedHero = this.heroes.pop();
  }

  addHero() {
    if (this.newHero.trim() !== '') {
      this.heroes.push(this.newHero.trim());
      this.newHero = '';
    }
  }

}
