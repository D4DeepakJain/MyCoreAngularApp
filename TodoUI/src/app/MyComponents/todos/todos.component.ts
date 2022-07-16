import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: "1",
        title: "T1",
        desc: "d1",
        isactive: true
      }, {
        id: "2",
        title: "T2",
        desc: "d2",
        isactive: true
      }

    ]
  }

  ngOnInit(): void {
  }

}
