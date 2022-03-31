import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-one',
  templateUrl: './util-seventy-one.component.html',
  styleUrls: ['./util-seventy-one.component.less']
})
export class UtilSeventyOneComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
