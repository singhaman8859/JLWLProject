import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  signup() {
    const user = { username: this.username, password: this.password };
    console.log(this.username,this.password,"lllplppppppppppppppppppp");
    localStorage.setItem('user', JSON.stringify(user));
  }
}
