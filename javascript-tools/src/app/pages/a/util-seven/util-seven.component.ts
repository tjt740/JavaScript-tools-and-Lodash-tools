import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seven',
  templateUrl: './util-seven.component.html',
  styleUrls: ['./util-seven.component.less']
})
export class UtilSevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.telFormat();
  }

}
