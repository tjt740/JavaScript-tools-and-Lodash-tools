import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-forty-three',
  templateUrl: './util-forty-three.component.html',
  styleUrls: ['./util-forty-three.component.less']
})
export class UtilFortyThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.listenEvent();
  }

}
