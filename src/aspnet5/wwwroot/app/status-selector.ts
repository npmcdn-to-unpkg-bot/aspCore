/**
 * Created by andre on 27.07.2016.
 */
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'status-selector',
    template: `<div>
<select #sel (change)="select.emit(sel.value)">
<option *ngFor="let status of statuses">
{{status}}
</option>
</select>
</div>`
})
export class StatusSelector{
    @Output() select = new EventEmitter();
    statuses = ["started", "completed"];

    ngOnInit(){
        this.select.emit(this.statuses[0]);
    }
}