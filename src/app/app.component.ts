import {Component, OnInit} from '@angular/core';

declare var flvjs: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'tcDEMo';
  ngOnInit() {
    const src = 'assets/2.mkv'
    this.flvPlay('videoElement', src);
  }
  /*
  * 播放
  * id 指向dom
  * toType 通过src路径自动获取播放类型并进行转换 只转换flv或者非flv（MP4）类型流文件
  * src 播放类型
  * */
  flvPlay(id, src) {
    // 获取播放类型
    let toType = 'mp4';
    if (src.split('.').pop().toLowerCase() === 'flv') {
      toType = 'flv';
    }
    // 赋值播放
    if (flvjs.isSupported()) {
      const videoElement = document.getElementById(id);
      const flvPlayer = flvjs.createPlayer({
        type: toType,
        url: src
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      // flvPlayer.play();
    }
  }
}
