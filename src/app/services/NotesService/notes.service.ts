import { Injectable } from '@angular/core';
import { HttpService } from '../httpsService/http-service.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  bUrl:string=environment.baseUrl
  token:any;
  constructor(private httpservice:HttpService) {
    this.token=localStorage.getItem("LoginId");
   }
   CreateNotes(NoteData:any)
   {
    this.token= localStorage.getItem("LoginId")
     console.log(NoteData);
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'bearer '+this.token
       })
     };
     return this.httpservice.postMethod(this.bUrl+'note', NoteData, true, httpOptions);
   }
 
   getallNotes()
   {
     this.token= localStorage.getItem("LoginId")
    console.log(this.token); 
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'bearer ' +this.token
       })
     };
     return this.httpservice.getMethod(this.bUrl+'note', true, httpOptions);
   }
}
