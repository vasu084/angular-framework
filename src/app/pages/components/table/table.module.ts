import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table.component';
import { LayoutModule } from '../../layout/layout.module';
import { CoreComponent } from '../core.component';


const routes: Routes = [
    {
        "path": "",
        "component": CoreComponent,
        "children": [
            {
                "path": "",
                "component": TableComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule.forRoot(),
        LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
      TableComponent
    ],
    providers: [

    ]
})
export class TableModule {
}

