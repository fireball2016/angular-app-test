import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'sandbox',
  template: `
  <form (submit)="onSubmit()">
    <div class="form-group">
      <label>name</label>
      <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
    </div>
    <div class="form-group">
      <label>email</label>
      <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
    </div>
    <div class="form-group">
      <label>phone</label>
      <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
    </div>
    <input type="submit" class="btn btn-success" value="Submit">
  </form>
  <hr>
  <div *ngFor="let user of users">
    <div class="well">
      <ul class="list-group">
        <li class="list-group-item">
        name: {{user.name}}
      </li>
      <li class="list-group-item">
      email: {{user.email}}
    </li>
    <li class="list-group-item">
    phone: {{user.phone}}
  </li>
      </ul>
      <br>
    </div>
  </div>
  `
})

export class SandboxComponent{
  users:any[];
  user:{
    name:'',
    email:'',
    phone:''
  }

  constructor(public dataService:DataService)
  {
    this.dataService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });
  }

  onSubmit(){
    this.dataService.addUser(this.user).subscribe(user => {
      this.users.unshift(user);
    });
  }

}
