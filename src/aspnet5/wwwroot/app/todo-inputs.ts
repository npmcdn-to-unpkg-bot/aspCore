/**
 * Created by andre on 16.07.2016.
 */
import {Component} from '@angular/core';
import {TodoService} from "./todo-service.ts";

@Component({
    selector: 'todo-input',
    //providers: [ TodoService ],
    template: `<div>
<input type="text" #myInput/>
<button (click)="onClick(myInput.value)">Click Me</button></div>`
})
export class TodoInput{
    public todoService : TodoService;
    constructor(){
        this.todoService = TodoService.getInstance();
        console.log(this.todoService);
    }

    onClick(v){
        this.todoService.todos.push(v);
        console.log(this.todoService.todos);
    }
}