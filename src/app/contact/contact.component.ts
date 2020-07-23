import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  items: Observable<any[]>;
  itemValue: any = {
    name: '',
    phone: '',
    email: '',
    occupation: ''
  };

  constructor(public db: AngularFireDatabase, private snackBar: MatSnackBar) {
    // this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(): void {
    // https://foirfe-d2e91.firebaseio.com/.json
    // go to this url to check if data is updated
    console.log(this.itemValue);
    this.db.list('feedbacks').push({ content: this.itemValue });
    this.openSnackBar("Your feedback recorded successfully", null)
    this.itemValue= {
      name: '',
      phone: '',
      email: '',
      occupation: ''
    };
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  phoneFormControl = new FormControl('', [
    Validators.pattern('[0-9]*'),
    Validators.minLength(10)
  ]);

  occupations: String[] = ['Student', 'Professional'];

  matcher = new MyErrorStateMatcher();
}
