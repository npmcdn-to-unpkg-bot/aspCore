/**
 * Created by andre on 16.07.2016.
 */
import {Component} from "@angular/core";
import {TodoService} from "./todo-service.ts";
import {TodoItemRenderer} from "./todo-item-renderer.ts";

@Component({
    selector: 'todo-list',
    //providers: [TodoService],
    directives: [TodoItemRenderer],
    template: `<div>
    <ul>
    <li *ngFor="let todo of todoService.todos">
    <todo-item-renderer [todo]="todo"></todo-item-renderer>
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