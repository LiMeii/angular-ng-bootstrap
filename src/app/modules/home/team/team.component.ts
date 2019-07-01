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
        this.subscription = this.messageService.currentNavigation.subscribe(data => {
            this.team && data && data.ref && data.ref === "team" ? this.team.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}