import { Component } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {
  title = 'Social links';
  mail = 'andy.alekhin@gmail.com';
  
  socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=100001507805300',
    linkedin: 'https://www.linkedin.com/in/andrey-alekhin-b3a371107/',
    instagram: 'https://www.instagram.com/andy.alekhin/'
  }

  getMailTo(mail) {
    return `mailto:${mail}`;
  }
}