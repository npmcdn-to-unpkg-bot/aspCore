import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {TodoInput} from './app/todo-inputs.ts'
import {TodoList} from './app/todo-list.ts'
import {StatusSelector} from './app/status-selector.ts'

@Component({
    selector: 'my-app',
    directives : [ TodoInput, TodoList, StatusSelector],
    template: `<h1><todo-input></todo-input>
    <status-selector (select)="status = $event"></status-selector>
    <todo-list [status]="status"></todo-list>
    {{ name }}!</h1>`
})
class HelloWorldComponent {
    name: string;
    constructor() {
        this.name = 'Angular 2';
    }
}
bootstrap(HelloWorldComponent,);