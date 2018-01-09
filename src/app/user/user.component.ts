import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username ='';

  constructor() { }

  ngOnInit() {
  }

  userButtonAccesible(){
    if (this.username != '') {
      return true;
    }
    return false;
  }

}
