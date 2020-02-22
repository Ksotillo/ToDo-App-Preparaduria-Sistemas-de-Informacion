import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    newTodo: Todo = new Todo();

  constructor(private todoService: TodoServiceService) {}

    mostrar() {
        console.log(this.newTodo.title)
    }

ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.newTodo.title = 'dsfasdads'
    
}

  cambiar(event) {
      
      this.newTodo.title = event.target.value
      console.log(this.newTodo.title)
    }

  addTodo() {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
      this.todoService.markAsComplete(todo);
  }

  removeTodo(todo) {
      this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
      return this.todoService.getAllTodos();
  }

}
