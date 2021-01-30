import { Component, OnInit } from '@angular/core';
import { FakeParticipant } from 'src/app/services/FakeParticipantService/FakeParticipant.service';


@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {

   constructor(private data :FakeParticipant) {
  }
  participants: Array<any>= [];


  index = -1 ;
   obj= {};
  ngOnInit(): void {
    this.data.currentindex.subscribe(i=>this.index=i)
    this.data.userData.subscribe(d=>this.participants=d)

  }
  onSubmit(regForm: any) {
  this.obj= {nom : regForm.nom , prenom :regForm.prenom ,adresse :regForm.adresse ,email:regForm.email , societe :regForm.Societe ,poste :regForm.Poste }
   console.log(regForm)
   this.participants[this.index]= this.obj;
  }
}