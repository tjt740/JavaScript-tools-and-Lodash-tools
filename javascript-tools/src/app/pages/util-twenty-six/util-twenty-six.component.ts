import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-six',
  templateUrl: './util-twenty-six.component.html',
  styleUrls: ['./util-twenty-six.component.less']
})
export class UtilTwentySixComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.isEmojiCharacter();
  }
}
