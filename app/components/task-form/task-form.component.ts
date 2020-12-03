import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public ts:TaskService) { }

  ngOnInit(): void {
  }

  addTarea(title:HTMLInputElement,description:HTMLInputElement) { 
    this.ts.addTareas({
      title: title.value,
      description: description.value,
      hide: true
    });
    title.value = "";
    description.value = "";
    title.focus();
    return false;
  }

}
