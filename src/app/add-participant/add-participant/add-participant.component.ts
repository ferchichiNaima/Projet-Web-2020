import { Component, OnInit } from '@angular/core';
import { FakeParticipant } from 'src/app/services/FakeParticipantService/FakeParticipant.service';

 
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
  
  
   constructor(private data :FakeParticipant) { 

   


  }
   obj={};
  ngOnInit(): void {
  }
  onSubmit(regForm: any) {
  this.obj={nom : regForm.nom , prenom :regForm.prenom ,adresse :regForm.adresse ,email:regForm.email , societe :regForm.Societe ,poste :regForm.Poste }
   console.log(regForm)
   this.data.addData(this.obj)

  
  }

 
  
  

}
