import { Component, Input, OnInit } from '@angular/core';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  @Input() name: String;
  @Input() type: String;
  @Input() isRunning: boolean;
  @Input() index: number
  public i: boolean

  public listeMachine: any[]

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.listeMachine = this.machineService.listeMachines
  }

  public switchOne() {
    this.machineService.switchOne(this.index);
  }

  public allOn(): void {
    this.machineService.switchOnAllMachines()
  }

  public allOff(): void {
    if(confirm('Tout éteindre ?')) {
    this.machineService.switchOffAllMachines()
    }
  }
}

// public machineListe = [
//   {
//     name: "machine 1",
//     type: "voiture",
//     dateSortie: new Date()
//   },
//   {
//     name: "machine 2",
//     type: "motO",
//     dateSortie: new Date()
//   }
// ]

// public getColor() {
//   console.log("name = ", name)
//   if (this.name === "voiture bleue") {
//     return "blue"
//   }
//   return "green"
// }

// public desactivate: boolean = true

// public isActivated(): boolean {
//   return false
// }

// public auClic(text: String): void {
//   console.log("Un clic sur le bouton " + text)
// }

// public myType(): String {
//   return this.type
// }

// public isIndex(index: Number): boolean {
//   return index == 1
// }

//  constructor() {
//    setTimeout(
//     () => {
//        this.desactivate = false
//      }, 5000
//    )

//  }