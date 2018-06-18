import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';

const routes: Routes = [
    {
        "path": "",
        "component": TabsComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], exports: [
        RouterModule
    ], declarations: [
      TabsComponent
    ],
    providers: [

    ]
})
export class TabsModule {
}

