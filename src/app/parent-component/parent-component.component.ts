import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  pdata :string = "i am parent data";
  receiveValueFromChild : string;
  constructor() { }

  ngOnInit() {
  }

  recieveValueChild($event){
  this.receiveValueFromChild = $event;
  }

}
