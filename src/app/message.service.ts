import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // establishes mesage variable
  messages: string [] = [];

  // allows adding of messages
  add(message: string) {
    this.messages.push(message);
  }

  // allows clearing of messages
  clear() {
    this.messages = [];
  }

  constructor() { }
}
