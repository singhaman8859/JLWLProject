import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '-0';
  password: string = '-0';

  login() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user,"00000000000000")
      console.log(this.username,this.password,"0000000000000000")
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

}
