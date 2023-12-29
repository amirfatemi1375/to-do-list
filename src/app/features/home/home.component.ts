import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../core/services/api-http.service';
import { MainList } from './models/main-list.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  mainList$: Observable<MainList>;
  constructor(private apiHttpService: ApiHttpService, private router: Router) {}
  ngOnInit() {
    this.mainList$ = this.apiHttpService.get('mainList');
  }
  goToTask() {
    this.router.navigate(['home/tasks']);
  }
}
