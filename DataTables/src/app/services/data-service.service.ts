import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getStudents');
  }
  
  deleteStudent(student_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteStudent/${student_id}`, { responseType: 'text' });
  }
}
