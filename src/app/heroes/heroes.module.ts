import { NgModule } from "@angular/core";


import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ]
})
export class HeroesModule {}

