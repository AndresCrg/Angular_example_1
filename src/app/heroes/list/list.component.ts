import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent  {

  heroesList: string[] = ['Ironman', 'Spiderman', 'Thor', 'Blackwidow']
  heroRemoved: string = '';

  constructor() { }

  removeHero(){
    this.heroRemoved =  this.heroesList.pop() || '';
  }

  heroIsEmpty(): boolean {
    return this.heroRemoved.length === 0;
  }

}
