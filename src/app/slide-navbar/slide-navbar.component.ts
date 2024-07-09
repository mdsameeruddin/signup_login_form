import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-navbar',
  templateUrl: './slide-navbar.component.html',
  styleUrls: ['./slide-navbar.component.css']
})
export class SlideNavbarComponent {
  showLoginForm: boolean = false;
signupUser: any[]=[];
signupObject: any={
  userName:'',
  email:'',
  password:'',
};
loginObject : any={
  userName:'',
  password:''
}


signup(){
  this.signupUser.push(this.signupObject);
  localStorage.setItem("signupUser",JSON.stringify(this.signupUser));
  this.signupObject={
    userName:'',
    email:'',
    password:'',
  };
  alert("login successful")
  this.showLoginForm = true;

}



ngOnInit() : void{
const localData=localStorage.getItem("signupUser");
if(localData!=null){
  this.signupUser=JSON.parse(localData);


}
}

login(){
  const data=this.signupUser.find(x=>x.userName==this.loginObject.userName && x.password==this.loginObject.password)
  if(data!=undefined){
    alert("login successful");
  }
  else{
    alert("wrong credentials");
  }
}

}
