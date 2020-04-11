import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginPayload)  
  {   
    const headers={
      "Authorization": "Basic " + btoa("oauth2-jwt-client:admin"),
      "Content-type" : "application/x-www-form-urlencoded"
    }
      return this.http.post("http://localhost:8080" + '/api/oauth/token', loginPayload, {headers});  
  } 
  
  
}