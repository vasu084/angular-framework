import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination.component';

const routes: Routes = [
    {
        "path": "",
        "component": PaginationComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      PaginationComponent
    ],
    providers: [

    ]
})
export class PaginationModule {
}

