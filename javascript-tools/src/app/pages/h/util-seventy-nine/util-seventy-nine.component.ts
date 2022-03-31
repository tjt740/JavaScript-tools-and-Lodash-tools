import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-nine',
  templateUrl: './util-seventy-nine.component.html',
  styleUrls: ['./util-seventy-nine.component.less']
})
export class UtilSeventyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
