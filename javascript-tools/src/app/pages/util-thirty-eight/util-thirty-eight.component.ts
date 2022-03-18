import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-eight',
  templateUrl: './util-thirty-eight.component.html',
  styleUrls: ['./util-thirty-eight.component.less']
})
export class UtilThirtyEightComponent implements OnInit {
  initCode: string = '';
  constructor(public toolsDoc: ToolsDocService) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.getClientWidth();
  }

}
