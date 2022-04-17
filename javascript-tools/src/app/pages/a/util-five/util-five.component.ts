import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-five',
  templateUrl: './util-five.component.html',
  styleUrls: ['./util-five.component.less']
})
export class UtilFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.randomArrayNum();
  }

}
