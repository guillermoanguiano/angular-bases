import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public hero:      string = 'Iron Man'
  public name:      string = 'Tony Stark';
  public birthyear: number = 1978;
  public date:      Date   = new Date();
  public age:       number = this.date.getFullYear() - this.birthyear;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.hero = 'Spiderman';
    this.name = 'Peter Parker';
  }

  changeAge():void {
    this.age  = 22;
  }

  resetForm():void {
    this.hero = 'Iron Man';
    this.name = 'Tony Stark';
    this.age  = this.date.getFullYear() - this.birthyear;
  }

}
