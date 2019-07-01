import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../../../share/service/message.service";

@Component({
    selector: "app-contact-info",
    templateUrl: "./contactInfo.component.html"

})


export class ContactInfoComponent implements OnInit, OnDestroy {
    @ViewChild('contactInfo', { static: false }) public contactInfo: ElementRef;
    subscription: Subscription;

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.subscription = this.messageService.currentNavigation.subscribe(data => {
            this.contactInfo && data && data.ref && data.ref === "contactInfo" ? this.contactInfo.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}