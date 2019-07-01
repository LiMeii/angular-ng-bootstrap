import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../../../share/service/message.service";

@Component({
    selector: "app-carousel",
    templateUrl: "./carousel.component.html"

})

export class CarouselComponent implements OnInit, OnDestroy {
    @ViewChild('carousel', { static: false }) public carousel: ElementRef;
    subscription: Subscription;

    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.subscription = this.messageService.getNavigationID().subscribe(data => {
            data && data.ref && data.ref === "carousel" ? this.carousel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}