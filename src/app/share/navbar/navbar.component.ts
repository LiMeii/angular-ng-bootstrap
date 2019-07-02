import { Component } from "@angular/core";

import { MessageService } from "../service/message.service";
import { navItems } from "../constants/app-constants";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
})

export class NavbarComponent {

    isNavbarCollapsed = true;
    navItems = navItems;

    constructor(
        private messageService: MessageService
    ) { }

    onGoToHomePage() {
        this.messageService.navigationChange({ key: 1, ref: "carousel" });
    }

    onNavigate(key: any, ref: any) {
        let item = { key: key, ref: ref };
        this.messageService.navigationChange(item);
    }
}