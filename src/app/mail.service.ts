import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [`You're now friends with Buddy.`,
  `Luke Cage is a great show`,
  `I want to buy all of Wes Bos' courses and Egghead.io's`];

  constructor() { }

}
