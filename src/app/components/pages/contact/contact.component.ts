import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NetlifyFormsService } from 'src/services/netlify-forms.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telephone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    ]),
    postcode: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/gm
      ),
    ]),
    enquiryDetails: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
  });

  get name() {
    return this.contactFormGroup.get('name');
  }
  get telephone() {
    return this.contactFormGroup.get('telephone');
  }
  get email() {
    return this.contactFormGroup.get('email');
  }
  get postcode() {
    return this.contactFormGroup.get('postcode');
  }
  get enquiryDetails() {
    return this.contactFormGroup.get('enquiryDetails');
  }

  formSuccess = false;
  formFaliure = false;
  formSubmissionAttempt = false;

  constructor(private formService: NetlifyFormsService) {}

  onSubmit(): void {
    console.log('form submission was callsed');
    if (this.contactFormGroup.valid) {
      const payload = this.contactFormGroup.value;
      this.formService.submitEnquiry(payload).subscribe(
        () => {
          this.contactFormGroup.reset();
          this.formSuccess = true;
          this.formSubmissionAttempt = true;
        },
        (err) => {
          this.formFaliure = true;
          this.formSubmissionAttempt = true;
        }
      );
    } else {
      this.contactFormGroup.markAllAsTouched();
    }
  }
}
