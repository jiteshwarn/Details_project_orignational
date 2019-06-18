import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-simple-component',
    templateUrl: './app.simple.component.html'
})

export class SimpleComponent implements OnChanges {
    @Input() simpleInput: String;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ": currentValue=" + current, "previous value" + previous)

        }
    }

}

