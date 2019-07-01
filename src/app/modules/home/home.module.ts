import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from "./home.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CasesComponent } from "./cases/cases.component";
import { CompanyInfoComponent } from "./companyInfo/companyInfo.component";
import { ContactInfoComponent } from "./contactInfo/contactInfo.component";
import { ProductsComponent } from "./products/products.component";
import { TeamComponent } from "./team/team.component";

import { MessageService } from "../../share/service/message.service";

const ChangeDetectionRoutes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ChangeDetectionRoutes),
        CommonModule,
        NgbModule
    ],
    declarations: [
        HomeComponent,
        CarouselComponent,
        CasesComponent,
        CompanyInfoComponent,
        ContactInfoComponent,
        ProductsComponent,
        TeamComponent
    ],
    providers: [MessageService]
})


export class HomeModule {

}