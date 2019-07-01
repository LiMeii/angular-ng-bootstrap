import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable()
export class MessageService {

    private navigationSource = new BehaviorSubject({ key: 1, ref: "carousel" });
    currentNavigation = this.navigationSource.asObservable();

    constructor() { }

    navigationChange(value: any) {
        this.navigationSource.next(value)
    }
}