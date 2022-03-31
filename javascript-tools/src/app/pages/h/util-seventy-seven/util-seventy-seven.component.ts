import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-seven',
  templateUrl: './util-seventy-seven.component.html',
  styleUrls: ['./util-seventy-seven.component.less']
})
export class UtilSeventySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
