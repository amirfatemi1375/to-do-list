import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Output() editEmit = new EventEmitter();
  @Output() deleteEmit = new EventEmitter();

  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  edit(item: any) {
    this.editEmit.emit(item);
  }
  delete(item: any) {
    this.deleteEmit.emit(item);
  }
}
