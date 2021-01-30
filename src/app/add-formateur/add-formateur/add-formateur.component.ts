import { Component, OnInit } from '@angular/core';
import { FakeFormateur } from 'src/app/services/FakeFormateurService/FakeFormateur.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  constructor(private data :FakeFormateur) {




  }
   obj={};
  ngOnInit(): void {
  }
  onSubmit(regForm: any) {
  this.obj={nom : regForm.nom , prenom :regForm.prenom ,adresse :regForm.adresse ,email:regForm.email , domaineExpertise :regForm.domaineExpertise }
   console.log(regForm)
   this.data.addData(this.obj)


  }

}
