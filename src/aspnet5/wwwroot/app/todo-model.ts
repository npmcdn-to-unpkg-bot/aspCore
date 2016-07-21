/**
 * Created by andre on 18.07.2016.
 */
export class TodoModel{
    status : string = "started";
    constructor(public title : string = ""){

    }

    toggle():void{
        this.status =
            this.status == "started"
                ? "completed"
                : "started";
    }
}