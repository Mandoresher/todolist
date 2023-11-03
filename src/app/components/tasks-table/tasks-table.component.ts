import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {IdCreatorService} from "../../shared/id-creator.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

export interface PeriodicElement {
  _id: number;
  taskText: string | null;
  expirationDate: string;
  priority: 'Urgent' | 'Medium' | 'Low';
  category: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    _id: 0,
    taskText: 'Сделать уборку',
    expirationDate: `03.11.23`,
    priority: 'Urgent',
    category: 'Аадачи по дому',
  },
];
@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatButtonModule, MatIconModule],
})
export class TasksTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'taskText',
    'expirationDate',
    'priority',
    'category',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private idCreatorService: IdCreatorService) {
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onClickAddTask() {
    ELEMENT_DATA.push({
      _id: this.idCreatorService.generateTaskId(),
      taskText: 'Ещё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаЕщё задачаv',
      expirationDate: `06.11.29`,
      priority: 'Low',
      category: 'Задачи по кеку',
    });
    console.log(`Создана задача с id: ${ELEMENT_DATA[ELEMENT_DATA.length-1]._id}`)
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onClickDeleteTask() {
    ELEMENT_DATA.pop();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onClickEditTask() {
    ELEMENT_DATA[0].taskText = prompt("Введите текст задачи");
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
}
