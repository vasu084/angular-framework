import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert.component';

const routes: Routes = [
    {
        "path": "",
        "component": AlertComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      AlertComponent
    ],
    providers: [

    ]
})
export class AlertModule {
}
