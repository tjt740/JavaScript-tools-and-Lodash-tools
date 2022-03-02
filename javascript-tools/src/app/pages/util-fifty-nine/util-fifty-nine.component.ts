import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-nine',
  templateUrl: './util-fifty-nine.component.html',
  styleUrls: ['./util-fifty-nine.component.less']
})
export class UtilFiftyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
  }

}
