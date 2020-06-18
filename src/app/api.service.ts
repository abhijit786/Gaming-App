import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LoginResultModel } from './LoginResultModel';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  
  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    }).pipe(catchError(this.handleError)
    );



    
    /*
    if(email==="abhi@gm.com" && password==="abhi")
    {
      this.lrs={
        token:"asdas"
      }

      console.log("Success")
      return this.lrs;
    }else{
      this.lrs["token"] = null;
      this.lrs["error"] = "Fail";
      console.log("Failure")

      return this.lrs;

    }
    */
  }

  getitemsapi(login:string,authtoken:string): Observable<any>{
    return this.http.get("https://api.jumpseller.com/v1/products/status/available.json",
     {
      params:
      {
      login:login,
      authtoken:authtoken
      }
    })
  }


  handleError(error: HttpErrorResponse){
    if(error.status===0)
    {
    alert('Error Occured while Executing the API Please check');
    }
    return throwError(error);
    }
}
