import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-six',
  templateUrl: './util-thirty-six.component.html',
  styleUrls: ['./util-thirty-six.component.less']
})
export class UtilThirtySixComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
    this.initCode = this.toolsDoc.smoothScroll();
  }

}
