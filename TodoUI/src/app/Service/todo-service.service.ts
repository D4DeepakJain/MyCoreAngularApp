import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../Todo';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  baseUrl:'https://localhost:7056/api/Todo';
  constructor(private http:HttpClient) { 
  }
  
    getAll(): Observable<Todo[]>{
      return this.http.get<Todo[]>(this.baseUrl);


    }

 
}
