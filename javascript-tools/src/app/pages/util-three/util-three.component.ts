import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-three',
  templateUrl: './util-three.component.html',
  styleUrls: ['./util-three.component.less']
})
export class UtilThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    // Step2 初始化
    this.initCode = this.toolsDoc.partitionNum();
  }
}
