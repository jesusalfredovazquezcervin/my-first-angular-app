import  { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number  = 10;
    serverStatus: string  = "Online";
    allowNewServer = false;
    
    constructor(){
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 3000);
    }

    getServerStatus() {
        return this.serverStatus;

    } 

    

}