import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../Todo';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {

  //baseUrl : '/';
  constructor(private http:HttpClient) { 
  }
  
    getAll(): Observable<Todo[]>{
      return this.http.get<Todo[]>('https://localhost:7056/api/todo');
    }

    addTodo(todo :Todo) : Observable<Todo>{
      console.log(todo);
      return this.http.post<Todo>('https://localhost:7056/api/todo', todo);
    } 
}
