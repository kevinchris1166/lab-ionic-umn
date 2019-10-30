import { TodoService, Todo } from './../services/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item){
    this.todoService.removeTodo(item.id);
  }
}
