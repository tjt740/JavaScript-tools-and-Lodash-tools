import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-forty-two',
  templateUrl: './util-forty-two.component.html',
  styleUrls: ['./util-forty-two.component.less']
})
export class UtilFortyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.nowTime();
  }

}
