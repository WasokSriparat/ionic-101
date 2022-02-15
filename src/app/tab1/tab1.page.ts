import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  promotions=[
    {
      subTitle:"ทุกวันอังคาร",
      title:"โปร 1 แถม 1",
      img:"https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      subTitle:"ทุกวันพุธ",
      title:"ลด 50%",
      img:"https://images.pexels.com/photos/11130743/pexels-photo-11130743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      subTitle:"วันศุกร์ - วันอาทิตย์",
      title:"โปร 1 แถม 1",
      img:"https://images.pexels.com/photos/11130573/pexels-photo-11130573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
  ];
  constructor() {}

}
