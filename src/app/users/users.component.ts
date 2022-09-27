import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName: string = ''; 
  enabledButton = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onCreatedUser(){
    return this.userName; 
  }
  onUpdatedUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    //"hello world".replace(/\s/g, "");

    if(this.userName.replace(/\s/g, "")!= ""){
      setTimeout(() =>{
        this.enabledButton = true;
      }, 100);
    }
    else{
      setTimeout(() =>{
        this.enabledButton = false;
      }, 100);
    }

  }
  cleanUserName(){
    this.userName='';
    setTimeout(() =>{
      this.enabledButton = false;
    }, 100);
  }
  


}
