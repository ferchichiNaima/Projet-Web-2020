import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class FakeFormateur {
    index = new BehaviorSubject<number>(-1);
    currentindex = this.index.asObservable();


  userDataSource = new BehaviorSubject<Array<object>>([]);

  userData = this.userDataSource.asObservable();


  constructor() {   }

   addData(dataObj: object) {
    const currentValue = this.userDataSource.value;
    const updatedValue = [...currentValue, dataObj];
    this.userDataSource.next(updatedValue);
}
  changeindex (i: number) {  this.index.next(i) ; }
}