/**
 * Created by andre on 24.07.2016.
 */
import {Pipe} from "@angular/core";

@Pipe({
    name : "search"
})
export class SearchPipe{
    //this will never know when new array member was added
    //therefore new array is introduce every time => immutability is maintained
    transform(value){
        return value.filter((item) => item.title.startsWith('s'));
    }
}