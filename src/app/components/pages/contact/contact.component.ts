import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { NetlifyFormsService } from 'src/services/netlify-forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactFormGroup = new FormGroup({
    name: new FormControl(''),
    telephone: new FormControl('', null),
    email: new FormControl(''),
    postcode: new FormControl(''),
    enquiryDetails: new FormControl(''),
  });

  constructor(
    private formService: NetlifyFormsService,
    private router: Router
  ) {}

  errorMsg = '';

  onSubmit(): void {
    console.log('form submission was callsed');
    if (this.contactFormGroup.valid) {
      console.log('isValid');
      const payload = this.contactFormGroup.value;
      this.formService.submitEnquiry(payload).subscribe(
        () => {
          this.contactFormGroup.reset();
        },
        (err) => {
          this.errorMsg = err;
          console.log(this.errorMsg);
        }
      );
    } else {
      this.contactFormGroup.markAllAsTouched();
    }
  }
}
