import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {TodoInput} from './app/todo-inputs.ts';
import {TodoList} from './app/todo-list.ts';
import {StatusSelector} from './app/status-selector.ts';
import {SearchBox} from './app/search-box.ts';

@Component({
    selector: 'my-app',
    directives : [ TodoInput, TodoList, StatusSelector, SearchBox],
    template: `<h1>
    <search-box (update)="term = $event"></search-box>
    <todo-input></todo-input>
    <status-selector (select)="status = $event"></status-selector>
    <todo-list [status]="status"
    [term]="term"
    ></todo-list>
    {{ name }}!</h1>`
})
class HelloWorldComponent {
    name: string;
    constructor() {
        this.name = 'Angular 2';
    }
}
bootstrap(HelloWorldComponent,);