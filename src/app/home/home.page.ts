import { Component } from '@angular/core';
import { Contacts } from '@ionic-native/contacts/ngx';
import { ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contFType: ContactFieldType[] = ['displayName'];
  contactsFound = [];

  constructor(private contacts: Contacts) {
    this.search('');
  }

  search(query) {
    const option: IContactFindOptions = {
      filter: query
    };

    this.contacts.find(this.contFType, option).then(contacs => {
      this.contactsFound = contacs;
    });
  }

  onKeyUp(e) {
    this.search(e.target.value);
  }

}
