import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginApi} from '../../api/login/login.api';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private msgs: MessageService,
              private loginApi: LoginApi) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    this.loginApi.login(this.form.get('username').value, this.form.get('password').value).subscribe((res: any) => {
      if (res.data) {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['']);
      }
    }, error => {
      this.form.get('password').setValue('');
      this.msgs.clear();
      this.msgs.add({
        severity: 'error',
        detail: 'Sai tên đăng nhập hoặc mật khẩu'
      });
    });
  }
}
