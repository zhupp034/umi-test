import { useEffect } from 'react';
export default function IndexPage() {
  useEffect(() => {
    let a = require('./page1.tsx')
    // console.log({a});
    let cc = require('./utils')
    // let a = require('./utils')
    let img = require('./audio-pause.png')
    console.log({cc,img,a});
    cc()
  }, [])
  return (

    <div>
      {/* <canvas id="canvas" style="width: 640px; height: 360px;display: none;"/> */}
      <video id="my-video" className="video-js" x-webkit-airplay="allow" src="https://pull-rtc-agora.leke.cn/live/agora_5224877_teacher_1390629_multi_2022-04-22-16-43-42_PC.flv" webkit-playsinline="true" preload="auto" width="640" height="360" data-setup="{}">
          {/* <source src="https://pull-rtc-agora.leke.cn/live/agora_5224877_teacher_1390629_multi_2022-04-22-16-43-42_PC.flv" /> */}
      </video>
    </div>
  );
}
