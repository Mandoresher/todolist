import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IdCreatorService } from '../../shared/id-creator/id-creator.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  id: number;
  taskText: string | null;
  expirationDate: string;
  priority: 'Urgent' | 'Medium' | 'Low';
  category: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 0,
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

  constructor(private idCreatorService: IdCreatorService) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onClickAddTask() {
    ELEMENT_DATA.push({
      id: this.idCreatorService.generateTaskId(),
      taskText: 'Построить космический корабль и улететь на Марс',
      expirationDate: `06.11.29`,
      priority: 'Low',
      category: 'Задачи по кеку',
    });
    console.log(
      `Создана задача с id: ${ELEMENT_DATA[ELEMENT_DATA.length - 1].id}`,
    );
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onClickDeleteTask(taskId: number) {
    const index = ELEMENT_DATA.findIndex(task => task.id === taskId);
    if (index !== -1) {
      ELEMENT_DATA.splice(index, 1);
    }
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onClickEditTask(taskId: number) {
    const index = ELEMENT_DATA.findIndex(task => task.id === taskId);
    ELEMENT_DATA[index].taskText = prompt('Введите текст задачи');
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
}
