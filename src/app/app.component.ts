import { Component } from '@angular/core';
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutingModule} from "./app-routing.module";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    MessagesComponent,
    AppRoutingModule
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
