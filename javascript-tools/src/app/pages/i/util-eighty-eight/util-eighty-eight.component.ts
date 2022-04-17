import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-eight',
  templateUrl: './util-eighty-eight.component.html',
  styleUrls: ['./util-eighty-eight.component.less']
})
export class UtilEightyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
