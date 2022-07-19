import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title:string;
desc:string;
@Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      id:'',
      title:this.title,
      desc:this.desc,
      isactive:true
    }
    this.todoAdd.emit(todo);
  }

}
