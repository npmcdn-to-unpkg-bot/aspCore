import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {TodoInput} from './app/todo-inputs.ts'
import {TodoList} from './app/todo-list.ts'

@Component({
    selector: 'my-app',
    directives : [ TodoInput, TodoList ],
    template: `<h1><todo-input></todo-input> 
    <todo-list></todo-list>
    {{ name }}!</h1>`
})
class HelloWorldComponent {
    name: string;
    constructor() {
        this.name = 'Angular 2';
    }
}
bootstrap(HelloWorldComponent,);