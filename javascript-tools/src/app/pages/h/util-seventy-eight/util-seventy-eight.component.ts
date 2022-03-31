import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-eight',
  templateUrl: './util-seventy-eight.component.html',
  styleUrls: ['./util-seventy-eight.component.less']
})
export class UtilSeventyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
