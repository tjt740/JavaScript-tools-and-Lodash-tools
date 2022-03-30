import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fourteen',
  templateUrl: './util-fourteen.component.html',
  styleUrls: ['./util-fourteen.component.less']
})
export class UtilFourteenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.getSessionStorage()
  }

}
