import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-five',
  templateUrl: './util-eighty-five.component.html',
  styleUrls: ['./util-eighty-five.component.less']
})
export class UtilEightyFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
