import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrl: './add-update-user.component.scss',
})
export class AddUpdateUserComponent implements OnInit {
  form: FormGroup;
  users: any[] = [];
  isEdit: boolean = false;
  user: any;
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }
  ngOnInit(): void {
    this.initForm();
    this.users = JSON.parse(window.localStorage.getItem('users') as any);
    this.getuserInfoUpdate();
  }
  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
  inputErrors(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
  getuserInfoUpdate() {
    this.form.patchValue(this.location.getState() as any);
    this.user = this.location.getState() as any;

    debugger;
  }
  saveUser() {
    debugger;
    if (this.form.invalid) {
      return;
    }
    if (!this.checkExistUser()) {
      this.users.push({ id: this.users.length + 1, ...this.form.value });
      window.localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigate(['/users/add-update-user']);
    } else {
      alert('Email already exist');
    }
  }
  editUser() {
    if (this.form.invalid) {
      return;
    }
    let index = this.users.findIndex((user) => user.id == this.user.id);
    this.users[index] = this.form.value;
    debugger;
    window.localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(['/users/add-update-user']);
  }
  submit() {
    if (!this.isEdit) {
      this.saveUser();
    } else {
      this.editUser();
    }
  }
  checkExistUser() {
    if (window.localStorage.getItem('users')) {
      let findUser = this.users.find(
        (item) => item.email == this.form.controls['email'].value
      );
      if (findUser) {
        return true;
      }
      return false;
    }
    return false;
  }
  back() {
    this.router.navigate(['/user']);
  }
}
