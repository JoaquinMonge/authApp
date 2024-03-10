import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login-page',
  standalone: true,
  providers: [AuthService],
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);

  constructor(private _authService: AuthService) { }

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  })

  login() {

    const { email, password } = this.myForm.value


    this._authService.login(email, password).subscribe({
      next: () => console.log('todo bien'),
      error: (message) => {
        Swal.fire('Error', message, 'error')
      }
    })
  }


}
