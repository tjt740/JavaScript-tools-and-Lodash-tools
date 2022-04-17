import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-seven',
  templateUrl: './util-ninety-seven.component.html',
  styleUrls: ['./util-ninety-seven.component.less']
})
export class UtilNinetySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
