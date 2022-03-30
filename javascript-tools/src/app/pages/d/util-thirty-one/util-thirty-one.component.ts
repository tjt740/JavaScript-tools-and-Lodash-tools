import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-one',
  templateUrl: './util-thirty-one.component.html',
  styleUrls: ['./util-thirty-one.component.less']
})
export class UtilThirtyOneComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
    this.initCode = this.toolsDoc.isPcType();
  }

}
