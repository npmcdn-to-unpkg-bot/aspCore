/**
 * Created by andre on 16.07.2016.
 */
import {Component} from "@angular/core";
import {TodoService} from "./todo-service.ts";

@Component({
    selector: 'todo-list',
    //providers: [TodoService],
    template: `<div>
    <ul>
    <li *ngFor="#todo of todoService.todos">
    {{todo}}
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