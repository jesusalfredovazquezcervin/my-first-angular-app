import  { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number  = 10;
    serverStatus: string  = "Online";
    allowNewServer = false;
    serverCreationStatus = "No server created yet..."
    serverName = '';
    
    
    constructor(){
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 3000);
    }

    getServerStatus() {
        return this.serverStatus;

    } 

    onCreatedServer(){
        this.serverCreationStatus = "A new server was created with name: " + this.serverName;

    }
    onUpdatedServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;

    }
}