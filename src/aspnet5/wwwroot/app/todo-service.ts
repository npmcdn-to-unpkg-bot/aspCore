import {Injectable} from "@angular/core";
/**
 * Created by andre on 16.07.2016.
 */
@Injectable()
export class TodoService{
    public todos : Array<any>;
    private static c = 0;
    static instance : TodoService;
    static isCreating : Boolean = false;

    constructor() {
        if (!TodoService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
        }

        TodoService.c = TodoService.c + 1;
        console.log(TodoService.c);
        this.todos = []
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
}