import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contacts } from 'src/app/models/Contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup;
  contact! : Contacts;
  formResult : string = '';

  constructor(private fb: FormBuilder) {}
  
  
  ngOnInit(): void {

    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['']
    });
  }

  adicionarContato(){
    if(this.contactForm.dirty && this.contactForm.valid){
      this.contact = Object.assign({}, this.contact, this.contactForm.value);
      this.formResult = JSON.stringify(this.contactForm.value);
      console.log(this.contact);
    }
    
  }

}
