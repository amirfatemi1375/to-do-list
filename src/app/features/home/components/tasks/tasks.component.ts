import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { ApiHttpService } from '../../../../core/services/api-http.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TASK } from '../../../../config/constant/api-address';

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
      title: ['', Validators.required],
    });
  }
  getTasks() {
    this.dataSource$ = this.ApiHttpService.get(TASK);
  }
  addTask() {
    if (this.form.invalid) {
      return;
    }
    this.ApiHttpService.post(TASK, this.form.value).subscribe((res) => {
      this.form.reset();
      this.getTasks();
    });
  }
  inputErrors(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
}
