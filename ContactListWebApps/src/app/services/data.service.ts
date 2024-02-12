import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';

@Injectable()
export class DataService {
private contact!: Contact;
constructor() { }

setContact(contact: Contact){
    this.contact = contact;
  }
  getContact(){
    return this.contact
  }
}
