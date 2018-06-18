import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ImageComponent } from './image.component';

const routes: Routes = [
    {
        "path": "",
        "component": ImageComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      ImageComponent
    ],
    providers: [

    ]
})
export class ImageModule {
}

