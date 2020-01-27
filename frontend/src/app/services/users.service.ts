import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly URL_API = 'http://localhost:3001/api/padel/users';
  selectedUsers: Users;
  users: Users[];

  constructor(private http: HttpClient) { 
    this.selectedUsers = new Users();
   }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  createUser(users: Users){
    return this.http.post(this.URL_API, users);
  }

  editUser(users: Users){
    return this.http.put(this.URL_API+`/${users._id}`, users);
  }

  deleteUser(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
