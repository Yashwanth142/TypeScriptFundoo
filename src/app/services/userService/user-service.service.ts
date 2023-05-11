import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpsService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  bUrl:string=environment.baseUrl
  constructor(private httpservice:HttpService) { }

  signup(data:{}){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.postMethod(this.bUrl+'users/',data,false,header)
  }
  login(data:{})
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'  
      })
    }

    return this.httpservice.postMethod(this.bUrl+'users/login', data, false, header);
  }
}
