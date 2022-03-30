import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-three',
  templateUrl: './util-fifty-three.component.html',
  styleUrls: ['./util-fifty-three.component.less']
})
export class UtilFiftyThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.swapItems();
  }

}
