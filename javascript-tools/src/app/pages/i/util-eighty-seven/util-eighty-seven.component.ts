import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-seven',
  templateUrl: './util-eighty-seven.component.html',
  styleUrls: ['./util-eighty-seven.component.less']
})
export class UtilEightySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
