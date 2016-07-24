/**
 * Created by andre on 21.07.2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ViewEncapsulation} from "@angular/core";

@Component({
    encapsulation: ViewEncapsulation.Native,
    selector: 'todo-item-renderer',
    template: `
      <style>
          .completed{
          text-decoration: line-through;
          }
      </style>
      <div>
      <span [ngClass]="todo.status">{{todo.title | uppercase}}</span>
      <button (click)="toggle.emit(todo)">Toggle</button>
       </div>`
})
export class TodoItemRenderer{
    @Input() todo;
    @Output() toggle = new EventEmitter();
}