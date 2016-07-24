/**
 * Created by andre on 16.07.2016.
 */
import {Component} from "@angular/core";
import {TodoService} from "./todo-service.ts";
import {TodoItemRenderer} from "./todo-item-renderer.ts";
import {SearchPipe} from "./search-pipe.ts"
import {StartedPipe} from "./started-pipe.ts"

@Component({
    selector: 'todo-list',
    //providers: [TodoService],
    pipes: [SearchPipe, StartedPipe],
    directives: [TodoItemRenderer],
    template: `<div>
    <ul>
    <li *ngFor="let todo of todoService.todos | started">
    <todo-item-renderer [todo]="todo"
    (toggle)="todoService.toggleTodo($event)">
</todo-item-renderer>
    </li>
</ul>
    </div>`
})
export class TodoList{
    public  todoService : TodoService;
    constructor() {
        this.todoService = TodoService.getInstance();
    }
}