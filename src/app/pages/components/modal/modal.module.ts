import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ModalComponent } from './modal.component';

const routes: Routes = [
    {
        "path": "",
        "component": ModalComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      ModalComponent
    ],
    providers: [

    ]
})
export class ModalModule {
}

