import { Component, OnInit } from '@angular/core';
import { MachineService } from './service/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet'

  public listeMachine: any[]

  constructor(private machineService: MachineService) {
  }

  ngOnInit(): void {
    this.listeMachine = this.machineService.listeMachines
  }
}

//   public namesList = [
//     "voiture verte", "voiture bleue", "voiture rouge"
//   ]
  
//   public voit1 = "voiture verte"
//   public voit2 = "voiture rouge"
//   public voit3 = "voiture bleue"
// }