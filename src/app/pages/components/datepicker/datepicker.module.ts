import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DatepickerComponent } from './datepicker.component';

const routes: Routes = [
    {
        "path": "",
        "component": DatepickerComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      DatepickerComponent
    ],
    providers: [

    ]
})
export class DatepickerModule {
}

