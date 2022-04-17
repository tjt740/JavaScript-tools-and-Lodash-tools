import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-five',
  templateUrl: './util-ninety-five.component.html',
  styleUrls: ['./util-ninety-five.component.less']
})
export class UtilNinetyFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
