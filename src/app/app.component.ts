import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetf';
  name = "Walid SAAD";
  //session_name = "Formation Mobile";
  nbpart: number=0;
  firstSession= {
    id: 1,
    name: 'Formation Angular',
    track: 'MEAN Stack',
    date: new Date('2020-11-19'),
    duree: 3,
    local: 'Tunis',
    participants: 0
  }
  mydate = Date.now() ;
  
}
