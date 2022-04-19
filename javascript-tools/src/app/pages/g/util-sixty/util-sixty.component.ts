import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty',
  templateUrl: './util-sixty.component.html',
  styleUrls: ['./util-sixty.component.less']
})
export class UtilSixtyComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {

    let arr = [1, 2, 3];
    let newArr1 = _.difference(arr, [2, 3]);

    console.log('newArr1:', newArr1);


  }

}
