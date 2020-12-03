import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tareas: Task[] = [];
  constructor() { }
  
  getTareas() {
    const tarea = JSON.parse(localStorage.getItem('TAREAS'));
    if (tarea !== null) {
      this.tareas = tarea;
    }
    return this.tareas;
  }
  addTareas(task: Task) { 
    let tarea = [];
    if (localStorage.getItem("TAREAS") === null) {
      this.tareas.push(task)
      localStorage.setItem("TAREAS", JSON.stringify(this.tareas));
    } else { 
      tarea =JSON.parse( localStorage.getItem("TAREAS"));
      tarea.push(task);
      this.tareas.push(task);
      localStorage.setItem("TAREAS", JSON.stringify(tarea));
    }
  }
  deleteTarea(task:Task) { 
    for (let index = 0; index < this.tareas.length; index++) {
      if (this.tareas[index]===task) {
        this.tareas.splice(index, 1);
        localStorage.setItem("TAREAS", JSON.stringify(this.tareas));
      }
    }
  }
}
