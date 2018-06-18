import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RatingComponent } from './rating.component';

const routes: Routes = [
    {
        "path": "",
        "component": RatingComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      RatingComponent
    ],
    providers: [

    ]
})
export class RatingModule {
}

