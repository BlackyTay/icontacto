import { Component } from '@angular/core';
import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contFType: ContactFieldType[] = ['displayName', 'phoneNumbers'];
  contactsFound = [];

  constructor(private contacts: Contacts) {
    this.search('');
  }

  search(query) {
    const option: IContactFindOptions = {
      filter: query
    }
    this.contacts.find(this.contFType, option).then(conts => {
      this.contactsFound = conts;
    });
  }

}
