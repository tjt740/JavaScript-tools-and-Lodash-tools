import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eye-emoji',
  templateUrl: './eye-emoji.component.html',
  styleUrls: ['./eye-emoji.component.less'],
})
export class EyeEmojiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  eyeball(event: any) {
    const eyeList = document.querySelectorAll('.eye');
    Array.from(eyeList).forEach((eyeDom) => {
      const x = eyeDom.getBoundingClientRect().left + eyeDom.clientWidth / 2;
      const y = eyeDom.getBoundingClientRect().top + eyeDom.clientHeight / 2;
      const radian = Math.atan2(event.pageX - x, event.pageY - y);
      const rot = radian * (180 / Math.PI) * -1 + 270;
      // @ts-ignore
      eyeDom.style.transform = 'rotate(' + rot + 'deg)';
    });
  }

  ngAfterViewInit(): void {
    document
      .getElementsByClassName('ant-layout')[0]
      .addEventListener('mousemove', this.eyeball);
  }
}
