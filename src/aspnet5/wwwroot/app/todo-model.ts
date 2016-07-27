/**
 * Created by andre on 18.07.2016.
 */
export class TodoModel{

    constructor(public title : string = "",
                public status:string = "started"){

    }

    toggle():void{
        this.status =
            this.status == "started"
                ? "completed"
                : "started";
    }
}