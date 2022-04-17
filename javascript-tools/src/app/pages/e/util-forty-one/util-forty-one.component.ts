import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-forty-one',
  templateUrl: './util-forty-one.component.html',
  styleUrls: ['./util-forty-one.component.less']
})
export class UtilFortyOneComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.dateFormater();
  }

}
