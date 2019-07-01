import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../../../share/service/message.service";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html"

})


export class ProductsComponent implements OnInit, OnDestroy {
    @ViewChild('products', { static: false }) public products: ElementRef;
    subscription: Subscription;

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.subscription = this.messageService.getNavigationID().subscribe(data => {
            data && data.ref && data.ref === "products" ? this.products.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }) : "";
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}