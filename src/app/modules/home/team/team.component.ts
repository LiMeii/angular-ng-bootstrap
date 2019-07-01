import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../../../share/service/message.service";

@Component({
    selector: "app-team",
    templateUrl: "./team.component.html"

})

export class TeamComponent implements OnInit, OnDestroy {
    @ViewChild('team', { static: false }) public team: ElementRef;
    subscription: Subscription;

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.subscription = this.messageService.getNavigationID().subscribe(data => {
            data && data.ref && data.ref === "team" ? this.team.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}