import {Injectable} from "@angular/core";
import {TodoModel} from "./todo-model.ts"
/**
 * Created by andre on 16.07.2016.
 */
@Injectable()
export class TodoService{
    public todos : [TodoModel];
    private static c = 0;
    static instance : TodoService;
    static isCreating : Boolean = false;

    constructor() {
        if (!TodoService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
        }

        TodoService.c = TodoService.c + 1;
        console.log(TodoService.c);
        this.todos = [
            new TodoModel("eat"),
            new TodoModel("sleep"),
            new TodoModel("dance", "completed"),
            new TodoModel("party"),
            new TodoModel("work"),
            new TodoModel("play"),
            new TodoModel("record", "completed"),
            new TodoModel("earn"),
            new TodoModel("charm", "completed"),
            new TodoModel("exercise"),
            new TodoModel("swim", "completed"),
            new TodoModel("code")
        ]
    }

    static getInstance() {
        console.log('creating');
        if (TodoService.instance == null) {
            TodoService.isCreating = true;
            TodoService.instance = new TodoService();
            TodoService.isCreating = false;
        }

        return TodoService.instance;
    }

    addTodo(todoModel:TodoModel) {
        this.todos = [...this.todos, todoModel];
    }

    toggleTodo(todo:TodoModel){
        console.log(todo);
        todo.toggle();
        const i = this.todos.indexOf(todo);

        this.todos = [
            ...this.todos.slice(0, i),
            todo,
            ...this.todos.slice(i + 1)
        ];
    }
}