/**
 * Created by andre on 16.07.2016.
 */
import {Component} from '@angular/core';
import {TodoService} from "./todo-service.ts";
import {TodoModel} from "./todo-model.ts";

@Component({
    selector: 'todo-input',
    //providers: [ TodoService ],
    template: `<div>
<form (submit)="onSubmit()">
<input type="text" [(ngModel)]="todoModel.title"/>{{todoModel.title}}
<input type="submit" (submit)="onSubmit()"/>
</form></div>`
})
export class TodoInput{
    public todoService : TodoService;
    public todoModel : TodoModel = new TodoModel("");
    constructor(){
        this.todoService = TodoService.getInstance();
        console.log(this.todoService);
    }

    onSubmit(){
        this.todoService.todos.push(this.todoModel);
        console.log(this.todoService.todos.length);
        this.todoModel = new TodoModel("next");
    }
}