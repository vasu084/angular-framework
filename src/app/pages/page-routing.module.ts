import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        "path": "",
        "component": PageComponent,
        "canActivate": [],

        "children": [
            {
                "path": "alert",
                "loadChildren": ".\/components\/alert\/alert.module#AlertModule"
            },
            {
                "path": "carousel",
                "loadChildren": ".\/components\/carousel\/carousel.module#CarouselModule"
            },
            {
                "path": "collapse",
                "loadChildren": ".\/components\/collapse\/collapse.module#CollapseModule"
            },
            {
                "path": "datepicker",
                "loadChildren": ".\/components\/datepicker\/datepicker.module#DatepickerModule"
            },
            {
                "path": "dropdown",
                "loadChildren": ".\/components\/dropdown\/dropdown.module#DropdownModule"
            },
            {
                "path": "modal",
                "loadChildren": ".\/components\/modal\/modal.module#ModalModule"
            },
            {
                "path": "pagination",
                "loadChildren": ".\/components\/pagination\/pagination.module#PaginationModule"
            },
            {
                "path": "popover",
                "loadChildren": ".\/components\/popover\/popover.module#PopoverModule"
            },
            {
                "path": "progressbar",
                "loadChildren": ".\/components\/progressbar\/progressbar.module#ProgressbarModule"
            },
            {
                "path": "rating",
                "loadChildren": ".\/components\/rating\/rating.module#RatingModule"
            },
            {
                "path": "table",
                "loadChildren": ".\/components\/table\/table.module#TableModule"
            },
            {
                "path": "tabs",
                "loadChildren": ".\/components\/tabs\/tabs.module#TabsModule"
            },
            {
                "path": "timepicker",
                "loadChildren": ".\/components\/timepicker\/timepicker.module#TimepickerModule"
            },
            {
                "path": "tooltip",
                "loadChildren": ".\/components\/tooltip\/tooltip.module#TooltipModule"
            },
            {
                "path": "typeahead",
                "loadChildren": ".\/components\/typeahead\/typeahead.module#TypeaheadModule"
            },
            {
                "path": "image",
                "loadChildren": ".\/components\/image\/image.module#ImageModule"
            },
            // {
            //     "path": "404",
            //     "loadChildren": ".\/components\/not-found\/not-found.module#NotFoundModule"
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
