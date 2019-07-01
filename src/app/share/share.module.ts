import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { MessageService } from "./service/message.service";


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
        MessageService
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})


export class ShareModule {

}