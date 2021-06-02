import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from './list/list.component';

@NgModule({
    //Se declaran las clases que estan dentro del folder principal (heroes)
    declarations: [
        HeroComponent,
        ListComponent
    ],
    // Se exportan clases
    exports: [
        ListComponent
    ],
    //Se importan modulos
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}