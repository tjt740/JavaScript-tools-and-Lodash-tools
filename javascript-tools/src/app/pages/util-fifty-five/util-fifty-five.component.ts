import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-five',
  templateUrl: './util-fifty-five.component.html',
  styleUrls: ['./util-fifty-five.component.less']
})
export class UtilFiftyFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
  }

}
