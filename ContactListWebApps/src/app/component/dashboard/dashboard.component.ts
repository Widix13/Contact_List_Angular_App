import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/model/Contact';
import { ApiConnectionService } from 'src/app/services/apiConnection.service';
import { AuthService } from 'src/app/services/auth.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public contacts!: Contact[];
  email!: string;
  constructor(private auth: AuthService, private api: ApiConnectionService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllContacts();
    this.email = this.auth.getEmail()!;
  }
  addNewContact(){

  }
  signOut(){
    this.auth.LogOut();
  }
  getAllContacts(){
    this.api.getAll().subscribe(data=>{
     this.contacts = data;
      })
   }

  deleteContact(id: number){
   this.api.deleteById(id).subscribe(()=>{alert("User is remove from list"); this.getAllContacts();});

  }

  openDialog(isNew: boolean, contact?: Contact): void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '500px',
      data: { isNew: isNew, contact:contact }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContacts();
    });
  }
}
