import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  constructor(public ts:TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(task) { 
    this.ts.deleteTarea(task);
  }

}
