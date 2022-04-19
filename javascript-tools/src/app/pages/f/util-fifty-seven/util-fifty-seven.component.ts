import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';
// lodash
import * as _ from 'lodash';

@Component({
  selector: 'app-util-fifty-seven',
  templateUrl: './util-fifty-seven.component.html',
  styleUrls: ['./util-fifty-seven.component.less']
})
export class UtilFiftySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    let arr1 = ['a1', 'b2', 'c3', 'd4', 'e5'];
    let arr2 = [['a', 'b'], 'c', 'd', 'e'];

    let newArr1 = _.chunk(arr1, 2);
    // → [['a1', 'b2'], ['c3', 'd4'], ['e5']];
    console.log('newArr1:', newArr1);

    let newArr2 = _.chunk(arr2, 2);
    // → [[["a","b"],"c"], ["d","e"]]；
    console.log('newArr2:', newArr2);

    this.initCode = this.toolsDoc.chunkArray();
  }

}
