import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName: string = ''; 
  enabledButton = false;
  passwordHidden = true;
  password = 'BOSCO';
  //logButtonClicks = new  Map<number, string>();
  logButtonClicks= [''];
  i=0;

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
  
  onTogglePassword(){
    //console.log('The hidden password is -> ' + this.passwordHidden);
    this.passwordHidden = !this.passwordHidden;
    //console.log('The hidden password is -> ' + this.passwordHidden);
    this.i += 1;
    const now = new Date();
    //this.logButtonClicks.set( this.i, now.toLocaleDateString() );
    //employees.forEach((item, key) => console.log(item));
    //this.logButtonClicks.push(this.i);
    this.logButtonClicks.push(now.toLocaleString() );

  }
  getColor(i: number){
    if (i >= 5){
      return 'cornflowerblue'      ;
    }
    return '';
  }
}
