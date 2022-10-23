import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-open-animation',
  templateUrl: './open-animation.component.html',
  styleUrls: ['./open-animation.component.less'],
})
export class OpenAnimationComponent implements OnInit {
  initCode: string = '';
  constructor(public toolsDoc: ToolsDocService) {}

  ngOnInit(): void {}
}
