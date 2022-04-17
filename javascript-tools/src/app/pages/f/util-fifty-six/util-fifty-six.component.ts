import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-six',
  templateUrl: './util-fifty-six.component.html',
  styleUrls: ['./util-fifty-six.component.less']
})
export class UtilFiftySixComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.blurrySearch();
  }

}
