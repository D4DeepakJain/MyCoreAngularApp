import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { TodoServiceService } from '../../Service/todo-service.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  
  constructor(private todoService: TodoServiceService) {

 }

  ngOnInit(): void {
    this.getallTodo();
  }

  deleteTodo(todo: Todo) {
    console.log("del");
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(
      response => {
        this.todoService.getAll()
    .subscribe(
      response => {
        this.todos = response;        
    }
    );
      }

    );
    this.getallTodo();
  }

  getallTodo(){
    this.todoService.getAll()
    .subscribe(
      response => {
        this.todos = response;        
    }
    );
  }


}
