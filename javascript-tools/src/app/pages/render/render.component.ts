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
    console.log(
      _.includes(
        [
          { user: 'fred', age: 40 },
          { user: 'tjt', age: 40 },
        ],
        {age: 40 },
      )
    );
  }
}
