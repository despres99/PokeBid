import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import { User } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 
  private userURL = "http://pokebidv2-env.eba-6cei577i.us-east-2.elasticbeanstalk.com/pokebid/users"
  
  getAllUsers(): Promise<User[]>{
    return firstValueFrom(this.http.get<User[]>(this.userURL));
  }

  getUserById(id: string): Promise<User>{
    return firstValueFrom(this.http.get<User>(this.userURL + "/" + id))
  }

  getTest(): Promise<any[]>{
      return firstValueFrom(this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/1'))
  }
}
