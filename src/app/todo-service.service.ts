import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

    lastId: number = 0;

    todos: Todo[] = [];

  constructor() { }

    addTodo(todo: Todo): void {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }

        this.todos.push(todo);
    }

    deleteTodoById(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
        // this.todos.forEach((todo, i) => {
        //     if (this.todos[i].id == id) this.todos.splice(i, 1);

        // })
        // for (let i = 0; i < this.todos.length; i++) {
        //     if (this.todos[i].id !== id) {
        //         // Lo guardamos en la lista
        //     } else {
        //         // No lo guardamos
        //     }
            
        // }
    }

    updateTodoById(id: number, values: {}): Todo {
        let todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }

    getTodoById(id: number): Todo {
        return this.todos.filter(todo => todo.id === id).pop();
    }

    markAsComplete(todo: Todo): Todo {
        const todoUpdated = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return todoUpdated;
    }

    getAllTodos(): Todo[] {
        return this.todos;
    }

}
