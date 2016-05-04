import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
@Component({
    selector: 'hello-world',
    template: '<h1>Hello {{ name }}!</h1>'
})
class HelloWorldComponent {
    name: string;
    constructor() {
        this.name = 'Angular 2';
    }
}
@Component({
    selector:'mysel',
    template:'<p>MySel</p>'
})
class MySelComponent{
    txt:string;
    constructor(){
        this.txt = "My TST"
    }
}
bootstrap(HelloWorldComponent);
bootstrap(MySelComponent);