import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs"

@Injectable()
export class MessageService {
    private navigationID: Subject<any> = new Subject<any>();

    sendNavigationID(data: any) {
        this.navigationID.next(data);
    }

    getNavigationID(): Observable<any> {
        return this.navigationID.asObservable();
    }
}