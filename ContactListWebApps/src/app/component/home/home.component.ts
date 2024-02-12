import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/Contact';
import { ApiConnectionService } from 'src/app/services/apiConnection.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date = new Date();
  public contacts?: Contact[];
  constructor(private apiService: ApiConnectionService, private router: Router, private data: DataService) { }

  getAllContacts(){
    this.apiService.getAll().subscribe(data=>{
     this.contacts = data;
      })
   }

   goToDetails(contact: Contact){
     this.data.setContact(contact);
     this.router.navigate(["contact-details"]);
   }
 
  ngOnInit(): void {
     this.getAllContacts();
    }

}
