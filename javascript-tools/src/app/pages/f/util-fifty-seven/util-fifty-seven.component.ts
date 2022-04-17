import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-seven',
  templateUrl: './util-fifty-seven.component.html',
  styleUrls: ['./util-fifty-seven.component.less']
})
export class UtilFiftySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
