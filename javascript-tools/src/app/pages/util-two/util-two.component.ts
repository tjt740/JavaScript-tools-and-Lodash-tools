import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util-two',
  templateUrl: './util-two.component.html',
  styleUrls: ['./util-two.component.less']
})
export class UtilTwoComponent implements OnInit {

  constructor() { }

  initCode:string = `
  function fn(){
    console.log(321);
  }
`;
  ngOnInit(): void {
  }

}
