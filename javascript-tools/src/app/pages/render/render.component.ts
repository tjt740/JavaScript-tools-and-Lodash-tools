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
    console.groupCollapsed(
      `%c 🍌window._. = lodash🍆`,
      'color:#36ab60; font-size: 14px;'
    );
    console.log('🌻_.xxx 使用lodash方法🌼');
  }
}
