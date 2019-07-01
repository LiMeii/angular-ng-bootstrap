import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from "./share/share.module";

import { AppComponent } from "./app.component";

import { MessageService } from "./share/service/message.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ShareModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
