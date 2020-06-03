import { Component, OnInit } from '@angular/core';
import {MDCTextField} from '@material/textfield';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
  }

}
