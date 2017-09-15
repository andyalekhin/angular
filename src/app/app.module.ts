import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { HeaderComponent } from '../components/header/header.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { WorkComponent } from '../components/work/work.component';
import { EducationComponent } from '../components/education/education.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    ContactsComponent,
    EducationComponent,
    WorkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
