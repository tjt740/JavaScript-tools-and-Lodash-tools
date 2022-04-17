import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-five',
  templateUrl: './util-twenty-five.component.html',
  styleUrls: ['./util-twenty-five.component.less']
})
export class UtilTwentyFiveComponent implements OnInit {
  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.isTel();
  }
}
