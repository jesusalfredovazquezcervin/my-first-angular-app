import { style } from '@angular/animations';
import  { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        ` .online {
            color: white;
        }
        `]
})
export class ServerComponent {
    serverID: number  = 10;
    serverStatus: string  = "Online";
  
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online':'Offline';
    }
    getServerStatus() {
        return this.serverStatus;

    }
    getColor(){
        //Method to get the color of background
        console.log(this.serverStatus);
        console.log(this.serverStatus === 'Online' ? 'green': 'red');
        return this.serverStatus === 'Online' ? 'green': 'red';
    }
}