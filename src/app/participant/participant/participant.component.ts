import { Component, OnInit } from '@angular/core';
import { FakeParticipant } from 'src/app/services/FakeParticipantService/FakeParticipant.service';



@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
    participants: Array<any>=[];


  delete(i:number): void {
    this.participants.splice(i, 1)


  }
  constructor(private data :FakeParticipant) {

   }

  ngOnInit(): void {
    this.data.userData.subscribe(d=>this.participants=d)


  }

  newindex (i:number) {
this.data.changeindex(i)

  }

}