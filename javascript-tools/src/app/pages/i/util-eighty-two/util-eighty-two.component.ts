import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-two',
  templateUrl: './util-eighty-two.component.html',
  styleUrls: ['./util-eighty-two.component.less']
})
export class UtilEightyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
