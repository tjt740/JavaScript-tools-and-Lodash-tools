import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty',
  templateUrl: './util-sixty.component.html',
  styleUrls: ['./util-sixty.component.less']
})
export class UtilSixtyComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
