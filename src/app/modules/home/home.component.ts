import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../share/service/message.service";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.messageService.navigationChange({ key: 1, ref: "carousel" });
    }

}