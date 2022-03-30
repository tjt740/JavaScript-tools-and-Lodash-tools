import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-five',
  templateUrl: './util-thirty-five.component.html',
  styleUrls: ['./util-thirty-five.component.less']
})
export class UtilThirtyFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.scrollToBottom();
  }

}
