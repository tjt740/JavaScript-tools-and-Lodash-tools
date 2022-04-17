import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifteen',
  templateUrl: './util-fifteen.component.html',
  styleUrls: ['./util-fifteen.component.less']
})
export class UtilFifteenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.setSessionStorage()
  }

}
