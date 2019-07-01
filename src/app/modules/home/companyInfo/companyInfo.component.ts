import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../../../share/service/message.service";


@Component({
    selector: "app-company-info",
    templateUrl: "./companyInfo.component.html"
})

export class CompanyInfoComponent implements OnInit, OnDestroy {
    @ViewChild('companyInfo', { static: false }) public companyInfo: ElementRef;
    subscription: Subscription;

    constructor(private messageService: MessageService) {
        this.subscription = this.messageService.getNavigationID().subscribe(data => {
            data && data.ref && data.ref === "companyInfo" ? this.companyInfo.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }) : "";
        });
    }

    ngOnInit() {
        this.subscription = this.messageService.getNavigationID().subscribe(data => {
            data && data.ref && data.ref === "companyInfo" ? this.companyInfo.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}