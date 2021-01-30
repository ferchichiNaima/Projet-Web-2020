import { Component, OnInit } from '@angular/core';
import { FakeSession } from 'src/app/services/FakeSessionService/FakeSession.service';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  index:any;
  isOn=false;

  sessionItems :Array<any>=[];
    
  constructor(private data :FakeSession) { }

  ngOnInit(): void {

    this.data.userData.subscribe(d=>this.sessionItems=d)

  }
  receiveindex($event:any) {
  this.index=$event;
  this.sessionItems.splice(this.index,1)
  this.data.changeindex(this.index)


  }

  show(): void  {

this.isOn=!this.isOn
  }
  onSubmit(regForm: any) {
   console.log(regForm)
   let obj = { name:regForm.name , track :regForm.track ,date : regForm.date , duree :regForm.duree , local:regForm.local , participants:regForm.participants}
   this.data.addData(obj)
     }

}