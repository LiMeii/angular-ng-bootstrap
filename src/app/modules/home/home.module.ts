import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from "./home.component";

const ChangeDetectionRoutes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ChangeDetectionRoutes), CommonModule, NgbModule],
    declarations: [HomeComponent]
})


export class HomeModule {

}