import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PopoverComponent } from './popover.component';

const routes: Routes = [
    {
        "path": "",
        "component": PopoverComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      PopoverComponent
    ],
    providers: [

    ]
})
export class PopoverModule {
}

