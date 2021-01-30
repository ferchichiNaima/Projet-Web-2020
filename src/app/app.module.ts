import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { AddFormateurComponent } from './add-formateur/add-formateur/add-formateur.component';
import { AddParticipantComponent } from './add-participant/add-participant/add-participant.component';
import { AddSession } from './add-session/add-session/add-session.component';

import { LeftNavbarComponent } from './left-navbar/left-navbar/left-navbar.component';
import { ParticipantComponent } from './participant/participant/participant.component';
import { SessionItemListComponent } from './session-item-list/session-item-list/session-item-list.component';
import { SessionItemComponent } from './session-item/session-item/session-item.component';
import { UpdateParticipantComponent } from './update-participant/update-participant/update-participant.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur/update-formateur.component';
import { FormsModule } from '@angular/forms';
import { FormateursComponent } from './foramteurs/formateurs/formateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AddFormateurComponent,
    AddParticipantComponent,
    AddSession,
    FormateursComponent,
    LeftNavbarComponent,
    ParticipantComponent,
    SessionItemListComponent,
    SessionItemComponent,
    UpdateParticipantComponent,
    UpdateFormateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
