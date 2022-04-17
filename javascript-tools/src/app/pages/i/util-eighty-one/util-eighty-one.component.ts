import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-one',
  templateUrl: './util-eighty-one.component.html',
  styleUrls: ['./util-eighty-one.component.less']
})
export class UtilEightyOneComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
