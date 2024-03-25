import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['name', 'lastName', 'email', 'action'];
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (window.localStorage.getItem('users')) {
      this.dataSource = JSON.parse(window.localStorage.getItem('users') as any);
    }
  }
  goToAddUser() {
    this.router.navigate(['/user/add-update-user']);
  }
  editUser(item: any) {
    this.router.navigateByUrl('/user/add-update-user', { state: item });
  }
  deleteUser(item: any) {
    this.dataSource = this.dataSource.filter(
      (data) => data.email != item.email
    );
    window.localStorage.setItem('users', JSON.stringify(this.dataSource));
  }
}
