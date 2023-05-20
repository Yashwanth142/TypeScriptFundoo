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
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'bearer ' +this.token
       })
     };
     return this.httpservice.getMethod(this.bUrl+'note', true, httpOptions);
   }
   UpdateNotes(updata: any) {
    this.token= localStorage.getItem("LoginId")
    //console.log(updata)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.putMethod(this.bUrl+'note/'+updata._id, updata, true, httpOptions);
  }
  AddToArchive(data:any){
    this.token= localStorage.getItem("LoginId")
    console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.putMethod(this.bUrl+'note/'+data._id+'/addArchive',data, true, httpOptions);
  }
  RemoveToArchive(data:any){
    this.token= localStorage.getItem("LoginId")
    //console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.putMethod(this.bUrl+'note/'+data._id+'/removeArchive',data, true, httpOptions);
  }

  AddToTrash(data:any){
    this.token= localStorage.getItem("LoginId")
    //console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.putMethod(this.bUrl+'note/'+data._id+'/addtrash',data, true, httpOptions);
  }
  RemoveToTrash(data:any){
    this.token= localStorage.getItem("LoginId")
    //console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.putMethod(this.bUrl+'note/'+data._id+'/removetrash',data, true, httpOptions);
  }
  PerDelete(data:any){
    this.token= localStorage.getItem("LoginId")
    //console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.deleteMethod(this.bUrl+'note/'+data._id, true, httpOptions);
  }

  ColorChange(colorData:any){
    this.token= localStorage.getItem("LoginId")
    //console.log(updata)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.putMethod(this.bUrl+'note/'+colorData._id+'/updatecolor', colorData, true, httpOptions);
  }
}
