/**
 * Created by andre on 24.07.2016.
 */
import {Pipe} from "@angular/core";

@Pipe({
    name : "started"
})
export class StartedPipe{
    //this will never know when new array member was added
    transform(value, status){
        return value.filter((item) => item.status === status);
    }
}