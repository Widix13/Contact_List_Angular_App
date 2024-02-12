import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/model/Contact';
import { ContactForm } from 'src/app/model/ContactForm';
import { ApiConnectionService } from 'src/app/services/apiConnection.service';
import { ContactCategory } from 'src/app/enums/ContactCategory.enum';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // @Input() contact: Contact | undefined;
   contactForm: FormGroup;
   @Input()contactFormModel?: ContactForm;
   id: number; 
  isNew: boolean;
  constructor(private api: ApiConnectionService,
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder
  ) {
    this.isNew = data.isNew;
    if(!this.isNew){
      this.contactFormModel = data.contact;
      this.id = data.contact.id;
    }else{
      this.id = 0;
    }
    //this.contactFormModel.id = data.contact.id;
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      category: [null, Validators.required],
      subcategory: [''],
      phoneNumber: ['', Validators.required],
      birthDate: ['']
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    if (this.contactFormModel) {
      this.contactForm.patchValue(this.contactFormModel);
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
       this.contactFormModel = this.contactForm.value;
       this.contactFormModel!.id = this.id;
      if(this.isNew){
        this.api.addContact(this.contactFormModel!).subscribe(
          (res: any) => {
            this.onCancelClick();
          }
        );
      }else{
      console.log('Updated contact:', this.contactFormModel);
        this.api.updateContact(this.contactFormModel!)
        .subscribe((res:any)=>{
          this.onCancelClick();
        })
      }
    } else {
      // Obsłuż błędy walidacji lub inne przypadki niewłaściwych danych
    }
  }
  onCategoryChange(): void {
    const categoryValue = this.contactForm.get('category')!.value;
  
    const subcategoryControl = this.contactForm.get('subcategory');
  
    if (subcategoryControl) {
      // W zależności od wybranej kategorii, aktualizuj opcje dla podkategorii
      switch (categoryValue) {
        case "0": // Business
          subcategoryControl.setValue('Business Subcategory');
          break;
        case "1": // Private
          subcategoryControl.disable()
          subcategoryControl.setValue(''); // Czyścimy wartość podkategorii
          break;
        case "2": // Other
          subcategoryControl.setValue('Other Subcategory');
          break;
        default:
          subcategoryControl.setValue(null);
          break;
      }
    }
  }
}
