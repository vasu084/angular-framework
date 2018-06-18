import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TimepickerComponent } from './timepicker.component';

const routes: Routes = [
    {
        "path": "",
        "component": TimepickerComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      TimepickerComponent
    ],
    providers: [

    ]
})
export class TimepickerModule {
}

