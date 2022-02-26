import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-two',
  templateUrl: './util-two.component.html',
  styleUrls: ['./util-two.component.less']
})
export class UtilTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    // Step2 初始化
    this.initCode = this.toolsDoc.randomNum(0, 10);
  }

}
