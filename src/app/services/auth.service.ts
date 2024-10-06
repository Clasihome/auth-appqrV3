import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }
  
  async login(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string,  ) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password, );
  }

  async logout() {
    return this.angularFireAuth.signOut;
  }

  async getUser() {
    return this.angularFireAuth.user;
  }


}
