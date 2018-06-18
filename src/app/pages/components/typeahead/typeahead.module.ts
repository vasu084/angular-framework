import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TypeaheadComponent } from './typeahead.component';

const routes: Routes = [
    {
        "path": "",
        "component": TypeaheadComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      TypeaheadComponent
    ],
    providers: [

    ]
})
export class TypeaheadModule {
}

