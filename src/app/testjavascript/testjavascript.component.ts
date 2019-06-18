import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testjavascript',
  templateUrl: './testjavascript.component.html',
  styleUrls: ['./testjavascript.component.css']
})
export class TestjavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}
var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
	}
}
console.log(personalDetail);


