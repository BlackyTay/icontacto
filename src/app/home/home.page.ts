import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Contacts, ContactFieldType, IContactFindOptions  } from '@ionic-native/contacts/ngx';
// import { ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contFType: ContactFieldType[] = ['displayName', 'phoneNumbers', 'photos'];
  contactsFound = [];
  contactDisplay: ContactDisplay;

  constructor(private contacts: Contacts, private sanitizer: DomSanitizer) {
    this.search('');
  }

  search(query) {
    const option: IContactFindOptions = {
      filter: query
    };

    this.contacts.find(this.contFType, option).then(contacs => {
      contacs.forEach(contac => {
      // this.contactDisplay.name = contac.displayName;
      // contac.phoneNumbers.forEach(phone => {
      //   this.contactDisplay.num.push(phone.value);
      // });
      // if (contac.photos != null) {
      //   this.contactDisplay.image = this.sanitizer.bypassSecurityTrustUrl(contac.photos[0].value);
      // }

      this.contactsFound.push(contac);
      // this.contactDisplay.name = null;
      // this.contactDisplay.num = null;
      // this.contactDisplay.image = null;
      });
    });
  }

  onKeyUp(e) {
    this.search(e.target.value);
  }

}

interface ContactDisplay {
  name: string;
  num: string[];
  image?: any;
}
