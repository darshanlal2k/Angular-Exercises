import { Component } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {
  getDatailsValue: object = {};

  cars: any = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7,
      "isEnabled": false
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5,
      "isEnabled": false
    },
    {
      "color": "yellow",
      "type": "star wagon",
      "registration": new Date('2018-08-19'),
      "capacity": 8,
      "isEnabled": false
    },
    {
      "color": "gray",
      "type": "city plus",
      "registration": new Date('2018-10-27'),
      "capacity": 9,
      "isEnabled": false
    },

  ]

  getRowValue(i: number, getDetails: any) {
    // console.log(getDetails);
    this.getDatailsValue = getDetails;
    // this.tabelDataParent = JSON.stringify(getDetails);

    const openPop = document.getElementById('PopModal');
    if (openPop != null) {
      openPop.style.display = 'block';
    }
  }


  deleteFunction(index: any) {
    this.cars.splice(index, 1);
  }

  checkBoxClicked(i: number) {
    // if (this.cars[i].isEnabled) {
    //   this.cars[i].isEnabled = false;
    // this.cars[i].isEnabled = false;
    // }
    // else {
    //   this.cars[i].isEnabled = true;
    // }
    (this.cars[i].isEnabled) ? this.cars[i].isEnabled = false : this.cars[i].isEnabled = true;
  }

}
