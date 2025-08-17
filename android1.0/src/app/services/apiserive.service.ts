import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiseriveService {

  private baseApiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }


// Method to get the list of users
getUsers(): Observable<any> {
  return this.http.get<any>(`${this.baseApiUrl}/users/`);
}

getprofile():Observable<any> {
  return this.http.get<any>(`${this.baseApiUrl}/profile/15/`)
}

getLands(): Observable<any[]> {
  return this.http.get<any[]>('/api/land/getAll');
}

postUsers(userData: any): Observable<any> {
  return this.http.post<any>(`${this.baseApiUrl}/users/`, userData);
}


Login(userData: any): Observable<any> {
  return this.http.post<any>(`${this.baseApiUrl}/login/`, userData);
}




}
