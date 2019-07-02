import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";


@NgModule({
    imports: [
        NgbModule,
        CommonModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent

    ],
    providers: [

    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})


export class ShareModule {

}