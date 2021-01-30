import { Component, OnInit } from '@angular/core';
import { FakeSession } from 'src/app/services/FakeSessionService/FakeSession.service';
 
 
@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSession implements OnInit {
  sessions: Array<any>=[];
  index:number =-1;
  
   constructor(private data :FakeSession) { 

    this.data.currentindex.subscribe(i=>this.index=i)
    this.data.userData.subscribe(d=>this.sessions=d)



  }
   ngOnInit(): void {
  }
  onSubmit(regForm: any) {
    let obj = { name:regForm.name , track :regForm.track ,date : regForm.date , duree :regForm.duree , local:regForm.local , participants:regForm.participants}
    
   this.sessions[this.index]= obj;
  
  
  }

 
  
  

}
