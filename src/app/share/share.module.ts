import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";

import { MessageService } from "./service/message.service";


@NgModule({
    imports: [
        NgbModule,
        CommonModule
    ],
    declarations: [

    ],
    providers: [
        MessageService
    ],
    exports: [
    ]
})


export class ShareModule {

}