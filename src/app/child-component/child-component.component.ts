import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
 cdata : string = "I am Child Data"
 @Input() reciveFromParent : String ;
 @Output() msgEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  //without event trigeer if we want to send data, uncomment below code
  //this.msgEvent.emit(this.cdata);
  }
   emitChild(){
    this.msgEvent.emit(this.cdata);
  }

}  
 