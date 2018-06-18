import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TooltipComponent } from './tooltip.component';

const routes: Routes = [
    {
        "path": "",
        "component": TooltipComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      TooltipComponent
    ],
    providers: [

    ]
})
export class TooltipModule {
}

