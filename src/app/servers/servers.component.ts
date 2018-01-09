import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created'
  serverName: String = '';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 3000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event){
    this.serverName = event.target.value;
  }

}
