import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {
  private fieldArray: Array<any> = [];
  private searchedValues: Array<any> = [];
  private newAttribute: any = {};
  private searchFieldVal = false;
  count = 0;
  displayedColumns: string[] = ['userFullName', 'EmailAddress'];
  arrayObj = {
    "ResponseBody": [
      {
        "userId": "003M000000zaza3IAA",
        "userFullName": "Anubha Singh",
        "EmailAddress": "anusingh@apttus.com",
        "AccessPermissions": null,
        "Roles": null,
        "AdminSettings": null,
        "OrgLocaleInfo": null,
        "LocaleInfo": null,
        "GlobalServiceUrl": null,
        "OrganizationMultiCurrency": false,
        "CurrencyLocale": null,
        "CurrencyIsoCode": null,
        "CurrencySymbol": null
      },
      {
        "userId": "003M000000y5pYCIAY",
        "userFullName": "Hardik Shah",
        "EmailAddress": "hardik.shah@apttus.com",
        "AccessPermissions": null,
        "Roles": null,
        "AdminSettings": null,
        "OrgLocaleInfo": null,
        "LocaleInfo": null,
        "GlobalServiceUrl": null,
        "OrganizationMultiCurrency": false,
        "CurrencyLocale": null,
        "CurrencyIsoCode": null,
        "CurrencySymbol": null
      },
      {
        "userId": "003M000000y5pYCIAY",
        "userFullName": "jitesh nishad",
        "EmailAddress": "jnishad@apttus.com",
        "AccessPermissions": null,
        "Roles": null,
        "AdminSettings": null,
        "OrgLocaleInfo": null,
        "LocaleInfo": null,
        "GlobalServiceUrl": null,
        "OrganizationMultiCurrency": false,
        "CurrencyLocale": null,
        "CurrencyIsoCode": null,
        "CurrencySymbol": null
      }

    ],
    "requestQueryBodyValue": {
      "TotalRecords": 12,
      "Key": 0,
      "SearchVal": "",
      "Size": 2,
      "Offset": 0
    }
  };
  dataSource = [];

  constructor() { }

  ngOnInit() {
    this.newAttribute.AssignReviewers = "User";
  }
  ngOnDestroy() {

  }
  addFieldValue() {
    this.searchFieldVal = false;
    if (this.newAttribute && this.newAttribute.userFullName && this.validateEmail(this.newAttribute.EmailAddress)) {
      this.fieldArray.push(this.newAttribute)
      console.log(this.fieldArray)
      let newArray: any[] = this.dataSource;
      newArray = newArray.concat({
        "userFullName": this.newAttribute.userFullName,
        "EmailAddress": this.newAttribute.EmailAddress
      });
      this.dataSource = newArray;
      this.newAttribute = {};
      this.newAttribute.AssignReviewers = "User";
    }
    else {
      alert("please enter valid input");
    }
  }
  updateVal(data) {
    this.newAttribute.userFullName = data['userFullName'];
    this.newAttribute.EmailAddress = data['EmailAddress'];
    this.searchFieldVal = false;
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  searchFieldValue() {
    if (this.newAttribute.userFullName) {
      var res = this.arrayObj && this.arrayObj.ResponseBody;
      var self = this;
      var temp = [];
      res.forEach(function (val) {
        if (val['userFullName'].includes(self.newAttribute.userFullName)) {
          temp.push(val);
        }
      });
      this.searchedValues = temp;

      this.searchFieldVal = true;

      console.log('search')
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


}

