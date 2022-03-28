import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty',
  templateUrl: './util-fifty.component.html',
  styleUrls: ['./util-fifty.component.less']
})
export class UtilFiftyComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.eventDelegation();
  }

}
