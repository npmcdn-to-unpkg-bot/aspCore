/**
 * Created by andre on 27.07.2016.
 */
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'search-box',
    template: `<div>
          <input #inp type="text" (input)="update.emit(inp.value)">
</div>`
})
export class SearchBox{
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit("");
    }
}