import { Component } from '@angular/core';
import { Contacts } from '@ionic-native/contacts'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private contacts: Contacts) {}

}
