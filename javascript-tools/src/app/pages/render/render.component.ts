import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.less'],
})
export class RenderComponent implements OnInit {
  @Input() renderData: any;

  initCode: string = '';

  constructor(public toolsDoc: ToolsDocService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['renderData'];

    if (currentValue) {
      this.initCode = currentValue;
    }
  }

  ngOnInit(): void {
    const users = [
      { userName: '谭金涛' },
      { userName: '戚思宁' },
      { userName: '柳晔', },
      { userName: '徐晨彦'}
    ];

    const a = _.dropWhile(users, function (o) {
      return o.userName !== '戚思宁';
    });
    console.log(a);

    // const b = _.dropWhile(users, { 'userName': '柳晔', 'active': false })
    // console.log(b);
  }
}
