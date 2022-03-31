import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-five',
  templateUrl: './util-seventy-five.component.html',
  styleUrls: ['./util-seventy-five.component.less']
})
export class UtilSeventyFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
