import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  username: string = '-0';
  password: string = '-0';

  login() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      
      if (user.username === this.username && user.password === this.password) {
        alert('Login successful');
        // You can navigate to the home page or perform other actions upon successful login
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('User not found. Please signup first.');
    }

  }

  nevigateToSignup(){
    alert("hiii")
    this.router.navigate(['/signup']);
  }

}
