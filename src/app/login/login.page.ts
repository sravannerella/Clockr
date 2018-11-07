import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	loginForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.loginForm = this.fb.group({
			email: ['', [
				Validators.required,
				Validators.pattern(/^(\d{10})|\b[\w|\d]+@[\w|\d]+\.\w{2,}/)
			]],
			password: ['', [
				Validators.required,
				Validators.minLength(5)
			]]
		});
	}

	ngOnInit() {
	}

}
