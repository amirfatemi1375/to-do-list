import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { ApiHttpService } from '../../../../core/services/api-http.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  form: FormGroup;
  dataSource$: Observable<Task[]>;
  displayedColumns: string[] = ['title'];
  constructor(
    private ApiHttpService: ApiHttpService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.getTasks();
  }
  initForm() {
    this.form = this.fb.group({
      title: [''],
    });
  }
  getTasks() {
    this.dataSource$ = this.ApiHttpService.get('tasks');
  }
  addTask() {
    this.ApiHttpService.post('tasks', this.form.value).subscribe((res) => {
      this;
    });
  }
}
