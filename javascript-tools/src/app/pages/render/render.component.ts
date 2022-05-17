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
    const arr1 = [1, 2, 3, 4, 5];
    const newArr1 = _.fill(arr1, 'tjt');
    console.log('newArr1:', newArr1);
    console.log('arr1:', arr1);

    const arr2 = [1, 2, 3, 4, 5];
    const newArr2 = _.fill(arr2, 'qsn',1,4);
    console.log('newArr2:', newArr2);
    console.log('arr2:', arr2);

  }
}
