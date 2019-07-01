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

    constructor(private messageService: MessageService) { }

    onNavigate(key: any, ref: any) {
        let item = { key: key, ref: ref };
        this.messageService.sendNavigationID(item);
    }
}