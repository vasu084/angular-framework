import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DropdownComponent } from './dropdown.component';

const routes: Routes = [
    {
        "path": "",
        "component": DropdownComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      DropdownComponent
    ],
    providers: [

    ]
})
export class DropdownModule {
}

