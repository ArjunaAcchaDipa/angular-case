import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

const baseUrl = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/GetAllUsersData';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(baseUrl);
  }

//   get(id: any): Observable<Person> {
//     return this.http.get(`${baseUrl}/${id}`);
//   }

//   create(data: any): Observable<any> {
//     return this.http.post(baseUrl, data);
//   }

//   update(id: any, data: any): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }

//   delete(id: any): Observable<any> {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }

//   deleteAll(): Observable<any> {
//     return this.http.delete(baseUrl);
//   }

//   findByTitle(title: any): Observable<Person[]> {
//     return this.http.get<Person[]>(`${baseUrl}?title=${title}`);
//   }
}
