import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirteen',
  templateUrl: './util-thirteen.component.html',
  styleUrls: ['./util-thirteen.component.less']
})
export class UtilThirteenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.removeLocalStorage()
  }

}
