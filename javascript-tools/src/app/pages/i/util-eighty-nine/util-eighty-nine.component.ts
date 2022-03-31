import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-nine',
  templateUrl: './util-eighty-nine.component.html',
  styleUrls: ['./util-eighty-nine.component.less']
})
export class UtilEightyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
