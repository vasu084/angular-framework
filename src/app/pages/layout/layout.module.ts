import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { CoreComponent } from '../components/core.component';

@NgModule({
    declarations: [
        CoreComponent,
        AsideNavComponent
    ],
    exports: [
        CoreComponent,
        AsideNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [

    ]
})
export class LayoutModule {
}
