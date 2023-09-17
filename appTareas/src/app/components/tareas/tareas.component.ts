import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listTareas : Tarea[]=[]
  nombreTarea = '';
  constructor(){}
    ngOnInit():void{}

    agregarTarea(){
      const tarea : Tarea={
        nombre: this.nombreTarea,
        estado : false
      }
      //Crear objeto tarea Array
      this.listTareas.push(tarea);

      // reset input

      this.nombreTarea = '';
    }
    eliminarTarea(index:number):void{
      this.listTareas.splice(index,1)
    }
    actualizarTarea(index:number , tarea:Tarea):void{
      this.listTareas[index].estado=!tarea.estado;
    }

}
