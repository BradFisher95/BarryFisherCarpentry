import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactFormGroup = new FormGroup({
    name: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    postcode: new FormControl(''),
    enquiryDetails: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Form Submitted!');
  }
}
