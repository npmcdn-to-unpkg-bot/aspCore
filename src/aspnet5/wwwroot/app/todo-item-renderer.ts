/**
 * Created by andre on 21.07.2016.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: 'todo-item-renderer',
    template: `
      <style>
          .completed{
          text-decoration: line-through;
          }
      </style>
      <div>
      <span [ngClass]="todo.status">{{todo.title}}</span>
      <button (click)="todo.toggle()">Toggle</button>
       </div>`
})
export class TodoItemRenderer{
@Input() todo;
}