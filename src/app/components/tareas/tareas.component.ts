import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tareas'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nameTarea: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    const tarea: Tarea = {
      name: this.nameTarea,
      state: false
    }
    this.listTareas.push(tarea);
    this.nameTarea = '';
  }
  deleteTarea(index: number): void {
    this.listTareas.splice(index, 1);
  }
  updateTarea(index: number, tarea: Tarea): void {
    this.listTareas[index].state = !tarea.state;
  }
}
