import { Component } from "@angular/core";

import { MessageService } from "../../../share/service/message.service";
import { navItems } from "../../../share/constants/app-constants";

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

    onGoTOHomePage() {
        this.messageService.navigationChange({ key: 1, ref: "carousel" });
    }

    onNavigate(key: any, ref: any) {
        let item = { key: key, ref: ref };
        this.messageService.navigationChange(item);
    }
}