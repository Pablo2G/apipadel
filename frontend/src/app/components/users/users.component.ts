import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { NgForm} from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form: NgForm){

    if(form.value._id){
      this.usersService.editUser(form.value)
        .subscribe(res =>{
          console.log(res);
          this.resetForm(form);
          M.toast({html: 'User update successfull'});
          this.getUsers();
        });

    }else{
      this.usersService.createUser(form.value)
      .subscribe( res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'User save successfull'});
        this.getUsers();
      });
    }


  }

  getUsers(){
    this.usersService.getUsers()
      .subscribe(res => {
        this.usersService.users = res as Users[];
        console.log("Llego a get users");
      });
  }

  editUser(user: Users){
    this.usersService.selectedUsers = user;
  }

  deleteUser(_id: String){
    if(confirm('Are you Are sure want you delete it?')){
      this.usersService.deleteUser(_id)
        .subscribe( res =>{
          this.getUsers();
          M.toast({html: 'User delete successfull'});
        })
    }
  }

  resetForm(form: NgForm){
    if (form) {
      form.reset();
      this.usersService.selectedUsers = new Users();
    }
  }

}
