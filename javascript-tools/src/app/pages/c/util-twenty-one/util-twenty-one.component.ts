import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-one',
  templateUrl: './util-twenty-one.component.html',
  styleUrls: ['./util-twenty-one.component.less']
})
export class UtilTwentyOneComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.haveCNChars();
  }

}
