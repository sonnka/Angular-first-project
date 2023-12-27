import { Component } from '@angular/core';
import {CommonModule, NgFor, NgIf, UpperCasePipe} from '@angular/common';
import { MessageService } from '../message.service';
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ]
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
