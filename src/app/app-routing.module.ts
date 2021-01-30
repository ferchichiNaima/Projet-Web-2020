import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { AddFormateurComponent } from './add-formateur/add-formateur/add-formateur.component';
import { AddParticipantComponent } from './add-participant/add-participant/add-participant.component';
import { AddSession } from './add-session/add-session/add-session.component';
import { ParticipantComponent } from './participant/participant/participant.component';
import { SessionItemListComponent } from './session-item-list/session-item-list/session-item-list.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur/update-formateur.component';
import { UpdateParticipantComponent } from './update-participant/update-participant/update-participant.component';

const routes: Routes = [
  {
    path: 'modif' ,
    component: AddSession
  },
  {
  path: '' ,
  component: AcceuilComponent
},
{
  path: 'foramteur',
  component: AddFormateurComponent
},
{
  path: 'participant',
  component: ParticipantComponent
},
{
  path: 'add-formateur',
  component: AddFormateurComponent
},
{
  path: 'add-participant',
  component: AddParticipantComponent
},
{
  path: 'sessions',
  component: SessionItemListComponent
},
{
  path: 'update-participant',
  component: UpdateParticipantComponent
},
{
  path: 'update-formateur',
  component: UpdateFormateurComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
