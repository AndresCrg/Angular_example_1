import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es: <strong> {{ base }}</strong></h3>
        <button (click)="acumulate(- base)"> - {{ base }} </button>
        <span> {{ count }} </span>
        <button (click)="acumulate(base)"> {{ base }} </button>
    `
})

export class CounterComponent{
    title: string = 'Contador App';
    count: number = 0;
    base: number = 3;

    acumulate( value: number ){
        this.count += value;
    }
}