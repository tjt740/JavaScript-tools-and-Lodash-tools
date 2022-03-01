import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-two',
  templateUrl: './util-twenty-two.component.html',
  styleUrls: ['./util-twenty-two.component.less']
})
export class UtilTwentyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.isPostCode();
  }

}
