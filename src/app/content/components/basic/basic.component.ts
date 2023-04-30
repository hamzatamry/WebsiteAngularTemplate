import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  currentRate = 2;
  
  constructor() { }

  ngOnInit(): void {
  }

  unhidePassword(passwordInput: any) {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } 
    else {
      passwordInput.type = "password";
    }
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

  ctrl = new FormControl<number | null>(null, Validators.required);

	toggle() {
		if (this.ctrl.disabled) {
			this.ctrl.enable();
		} else {
			this.ctrl.disable();
		}
	}

  toggleDarkMode() {
    let element = document.body;
    let nav = document.getElementById("navbar-example2");
    element.classList.toggle("dark-mode");
    nav?.classList.toggle("dark-mode");
  }
}