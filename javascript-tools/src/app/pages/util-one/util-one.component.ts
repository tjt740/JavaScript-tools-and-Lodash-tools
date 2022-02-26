import { Component, OnInit } from '@angular/core';
// 函数文档
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-one',
  templateUrl: './util-one.component.html',
  styleUrls: ['./util-one.component.less'],
})
export class UtilOneComponent implements OnInit {
  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    //初始化
    this.initCode = this.toolsDoc.intToChinese()
  }
}
