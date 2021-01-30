import { Component, OnInit } from '@angular/core';
import { FakeFormateur } from 'src/app/services/FakeFormateurService/FakeFormateur.service';


@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  formateurs: Array<any> = [];


  delete(i: number): void {
    this.formateurs.splice(i, 1);
  }
  constructor(private data: FakeFormateur) {
   }

  ngOnInit(): void {
    this.data.userData.subscribe(d=>this.formateurs = d);
  }

  newindex (i: number) {
this.data.changeindex(i);

  }
}