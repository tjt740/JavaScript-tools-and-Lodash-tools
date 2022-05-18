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
    const list = [
      { userName: '谭金涛', active: false },
      { userName: '戚思宁', active: false },
      { userName: '柳晔', active: true },
      { userName: '徐晨彦', active: true },
    ];
    _.head(list);
    // →  { userName: '谭金涛', active: false }

    const arr = [1, 2, 3];
    _.head(arr)
    // 1
  }
}
