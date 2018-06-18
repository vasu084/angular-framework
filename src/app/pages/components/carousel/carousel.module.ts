import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel.component';

const routes: Routes = [
    {
        "path": "",
        "component": CarouselComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      CarouselComponent
    ],
    providers: [

    ]
})
export class CarouselModule {
}

