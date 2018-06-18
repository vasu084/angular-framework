import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProgressbarComponent } from './progressbar.component';

const routes: Routes = [
    {
        "path": "",
        "component": ProgressbarComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      ProgressbarComponent
    ],
    providers: [

    ]
})
export class ProgressbarModule {
}

