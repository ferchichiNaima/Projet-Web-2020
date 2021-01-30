import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
//name = "Formation Web";
alignement = "right";
couleur = "red";
@Input() session: any;
@Input()index: number = -1;

@Output() indexEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

 
inscrire()
{
  //1-Modifier la valeur de name
  this.session.name = "Formation Web Avancé";
  //2-Afficher un message sur le console
  console.log('Nouvelle Inscription');
  //3-Incrementer le nombre de participants
  this.session.participants = +this.session.participants + 1;
  //4-Afficher le nombre de participants sur le console
  console.log(this.session.participants+' Paricipants');
  //Envoyer le NBP au composant parentt
  
  if (this.session.participants >=20)
  {
    this.session.isCompleted= true;
  } 

}


send(): void {
  this.indexEvent.emit(this.index);

}

 

}