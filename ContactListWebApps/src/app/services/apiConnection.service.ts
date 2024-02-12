import { HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPath } from '../enums/apiPath.enum';
import { Contact } from '../model/Contact';
import { ContactForm } from '../model/ContactForm';
@Injectable()
export class ApiConnectionService {
private baseUrl = environment.baseUrl;

constructor(private httpClient: HttpClient) { }


getAll(){
    let url = `${this.baseUrl}${ApiPath.GetAll}`;
    return this.httpClient.get<Contact[]>(url);
  }

  deleteById(id: number) {
    let url = `${this.baseUrl}${ApiPath.DeleteContact}${id}`;
    return this.httpClient.delete(url);
  }
  
   addContact(addContact: ContactForm){
     let url = `${this.baseUrl}${ApiPath.AddContact}`
    addContact.category = parseInt((addContact.category).toString(), 10);
     return this.httpClient.post(url, addContact );
      
  }

  updateContact(updateContact: ContactForm){
    let url = `${this.baseUrl}${ApiPath.UpdateContact}`
    return this.httpClient.put(url, updateContact);
  }
  
}
