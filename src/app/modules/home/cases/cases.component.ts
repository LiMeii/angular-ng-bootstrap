import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../../../share/service/message.service";

@Component({
    selector: "app-cases",
    templateUrl: "./cases.component.html"

})

export class CasesComponent implements OnInit, OnDestroy {
    @ViewChild('cases', { static: false }) public cases: ElementRef;
    subscription: Subscription;

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.subscription = this.messageService.getNavigationID().subscribe(data => {
            data && data.ref && data.ref === "cases" ? this.cases.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}