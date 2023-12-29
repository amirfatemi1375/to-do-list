import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MainList } from '../../models/main-list.model';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrl: './daily-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyListComponent implements OnInit {
  @Input() mainList$: Observable<MainList>;
  constructor() {}
  ngOnInit(): void {}
}
