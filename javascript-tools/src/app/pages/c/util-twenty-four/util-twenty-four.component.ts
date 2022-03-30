import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-four',
  templateUrl: './util-twenty-four.component.html',
  styleUrls: ['./util-twenty-four.component.less']
})
export class UtilTwentyFourComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.isEmail();
  }
}
