import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-four',
  templateUrl: './util-fifty-four.component.html',
  styleUrls: ['./util-fifty-four.component.less']
})
export class UtilFiftyFourComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
    this.initCode = this.toolsDoc.getType();
  }

}
