import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/Contact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact!: Contact;
  constructor(public date: DatePipe, private dataService: DataService,private router: Router) { }

  ngOnInit() {
    const contact = this.dataService.getContact();
    const storedContact = localStorage.getItem('contact');
    if (storedContact === null) {
       localStorage.setItem('contact', JSON.stringify(contact));
       this.contact = contact;
    } else {
       this.contact = JSON.parse(storedContact);
    }
    
  }
goBack(){
  this.router.navigate(["/"])
  localStorage.removeItem('contact');
}

@HostListener('window:beforeunload', ['$event'])
confirmExit(event: any) {
   if (localStorage.getItem('contact')) {
    localStorage.removeItem('contact');
  }
  event.returnValue = true; 
}

  
  getBirthDay(){
    const birthDay = new Date(this.contact.birthDate);
    return this.date.transform(this.contact.birthDate, 'dd-MM-yyyy');
  }

}
