import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  
})
export class ServersComponent implements OnInit {
  //serverID: number  = 10;
  //serverStatus: string  = "Online";
  allowNewServer = false;
  serverCreationStatus = "No server created yet..."
  serverName = '';
  serverCreated = false;
  servers = ['Test', 'Production'];

  constructor(){
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 3000);
        
    } 

    onCreatedServer(){
        this.serverCreationStatus = "A new server was created with name: " + this.serverName;
        this.serverCreated = true;
        this.servers.push(this.serverName);
    }
    onUpdatedServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;

    }
    

  ngOnInit(): void {
  }
  

}
