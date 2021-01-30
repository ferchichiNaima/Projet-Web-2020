import { Component, OnInit } from '@angular/core';
import { FakeFormateur } from 'src/app/services/FakeFormateurService/FakeFormateur.service';

import { FakeParticipant } from 'src/app/services/FakeParticipantService/FakeParticipant.service';
import { FakeSession } from 'src/app/services/FakeSessionService/FakeSession.service';
 
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  participants: Array<any>=[];
  formateurs: Array<any>=[];
  sessions: Array<any>=[];
  sessioncount = [
   {
     title:'MEAN Stack',
     number :0

   },
   {
    title:'Android',
    number :0

  },
  {
    title:'Ionic',
    number :0

  },
  {
    title:'Angular',
    number :0

  },
  {
    title:'Nodejs',
    number :0

  },
  {
    title:'Xamarin',
    number :0

  },
  {
    title:'Symphony',
    number :0

  },
  {
    title:'Laravel',
    number :0

  },
  {
    title:'Swift',
    number :0

  },
  
  
  
  



  ]

  constructor(private data2 :FakeParticipant,private data :FakeFormateur,private data1 :FakeSession) { }

  ngOnInit(): void {
    this.data.userData.subscribe(d=>this.formateurs=d)
    this.data1.userData.subscribe(d=>this.sessions=d)
    this.data2.userData.subscribe(d=>this.participants=d)

    console.log(this.sessions)
    //"Symphony" "Laravel""Swift"

     for ( let i=0 ; i<this.sessions.length;i++)
     {
       switch (this.sessions[i].track) {
         case "MEAN":
         this.sessioncount[0].number+=1; break;
         case "Android":
         this.sessioncount[1].number+=1;break;
         case "Ionic":
          this.sessioncount[2].number+=1;break;
          case "Angular":
          this.sessioncount[3].number+=1;break;
          case "NodeJS":
          this.sessioncount[4].number+=1;break;
          case "Xamarin":
          this.sessioncount[5].number+=1;break;
          case "Symphony":
            this.sessioncount[6].number+=1;break;
            case "Laravel":
              this.sessioncount[7].number+=1;break;
              case "Swift":
                this.sessioncount[8].number+=1;break;

       }
     }

  }

}