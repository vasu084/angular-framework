import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CollapseComponent } from './collapse.component';

const routes: Routes = [
    {
        "path": "",
        "component": CollapseComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      CollapseComponent
    ],
    providers: [

    ]
})
export class CollapseModule {
}

