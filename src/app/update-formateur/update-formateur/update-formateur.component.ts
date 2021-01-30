import { Component, OnInit } from '@angular/core';
import { FakeFormateur } from 'src/app/services/FakeFormateurService/FakeFormateur.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  constructor(private data: FakeFormateur) {
  }
  formateurs: Array<any> = [];


  index = -1 ;
   obj = {};
  ngOnInit(): void {
    this.data.currentindex.subscribe(i=>this.index=i)
    this.data.userData.subscribe(d=>this.formateurs=d)

  }
  onSubmit(regForm: any) {
  this.obj= {nom : regForm.nom , prenom :regForm.prenom ,adresse :regForm.adresse ,email:regForm.email , domaineExpertise :regForm.DomaineExpertise }
   console.log(regForm)
   this.formateurs[this.index]= this.obj;
  }
}