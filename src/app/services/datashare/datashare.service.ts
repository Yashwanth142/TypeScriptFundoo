import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  private data = new BehaviorSubject([]);
  subPoint = this.data.asObservable();
  
  dataInToUnrelated(payload:any)
  {
    this.data.next(payload);
    // console.log("from data sharer", payload);   
  }
}
