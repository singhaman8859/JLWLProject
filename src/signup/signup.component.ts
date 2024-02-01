import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: String = '';
  mobile: String = '';

  signup() {
    const user = { username: this.username, password: this.password, email:this.email,mobile:this.mobile};
    console.log(this.username, this.password, "lllplppppppppppppppppppp");
    localStorage.setItem('user', JSON.stringify(user));
    alert("Signed up successfully !!!")
  }
}
