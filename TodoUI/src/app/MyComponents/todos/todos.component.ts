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

    



    // this.todos = [
    //   {
    //     id: "1",
    //     title: "T1",
    //     desc: "d1",
    //     isactive: true
    //   }, {
    //     id: "2",
    //     title: "T2",
    //     desc: "d2",
    //     isactive: true
    //   }
    // ]
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
        
      }

    );
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
