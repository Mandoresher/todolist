import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  taskText: string;
  expirationDate: string;
  priority: "Urgent" | "Medium" | "Low";
  category: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    taskText: 'Сделать уборку',
    expirationDate: `03.11.23`,
    priority: 'Urgent',
    category: 'Аадачи по дому'},
];
@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})
export class TasksTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['taskText', 'expirationDate', 'priority', 'category'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onClickAddTask() {
    ELEMENT_DATA.push({
      taskText: 'Ещё задача',
      expirationDate: `06.11.29`,
      priority: 'Low',
      category: 'Задачи по кеку'},)
    this.dataSource = new MatTableDataSource(ELEMENT_DATA)
  }

}
