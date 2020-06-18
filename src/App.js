import React, { Component } from 'react';
import logo from './logo.svg';
import { Player, ControlBar, BigPlayButton, VolumeMenuButton, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';
import DownloadButton from './DownloadButton.js';
import "../node_modules/video-react/dist/video-react.css";
import './App.css';

export default class App extends Component {
  player = ''
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <div className='box'>
          <Player
            // autoPlay
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            ref={(player) => { this.player = player }}
          >
            <BigPlayButton position="center" />
          </Player>
          <span>将播放按钮放在视频中间(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/sintel/trailer.mp4"
            ref={(player) => { this.player = player }}
          >
            <ControlBar>
              <VolumeMenuButton vertical />
            </ControlBar>
          </Player>
          <span>将音量按键竖起来(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/bunny/trailer.mp4"
            ref={(player) => { this.player = player }}
          >
            <ControlBar autoHide={false} disableDefaultControls>
            </ControlBar>
          </Player>
          <span>隐藏控制按键(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/bunny/movie.mp4"
            ref={(player) => { this.player = player }}
          >
            <ControlBar autoHide={false} disableDefaultControls>
              <VolumeMenuButton />
            </ControlBar>
          </Player>
          <span>只保留音量键(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/bunny/movie.mp4"
            ref={(player) => { this.player = player }}
          >
            <ControlBar>
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
            </ControlBar>
          </Player>
          <span>增加可选择倍速播放(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/bunny/trailer.mp4"
            ref={(player) => { this.player = player }}
          >
            <track
              kind="captions"
              src="../assets/captions.en.vtt"
              srcLang="en"
              label="English"
              default
            />
            <track
              kind="captions"
              src="../assets/captions.sv.vtt"
              srcLang="sv"
              label="Swedish"
            />
            <track
              kind="captions"
              src="../assets/captions.ru.vtt"
              srcLang="ru"
              label="Russian"
            />
            <track
              kind="captions"
              src="../assets/captions.ja.vtt"
              srcLang="ja"
              label="Japanese"
            />
            <track
              kind="captions"
              src="../assets/captions.ar.vtt"
              srcLang="ar"
              label="Arabic"
            />
            <track
              kind="descriptions"
              src="../assets/descriptions.en.vtt"
              srcLang="en"
              label="English"
            />
            <track
              kind="chapters"
              src="../assets/elephantsdream/chapters.en.vtt"
              srcLang="en"
              label="English"
            />
            <ControlBar autoHide={false}>
              <ClosedCaptionButton order={7} />
            </ControlBar>
          </Player>
          <span>切换语言播放(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            poster={logo}
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/bunny/movie.mp4"
            ref={(player) => { this.player = player }}
          >
            <ControlBar autoHide={false}>
              <DownloadButton order={7} />
            </ControlBar>
          </Player>
          <span>提供下载功能(点击视频都可以进行暂停和播放)</span>
        </div>
        <div className='box'>
          <Player
            playsInline
            aspectRatio='4:3'
            src="http://media.w3.org/2010/05/bunny/movie.mp4"
            ref={(player) => { this.player = player }}
          />
            <span>初始模样(点击视频都可以进行暂停和播放)</span>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Player
//         playsInline
//         poster={logo}
//         aspectRatio='4:3'
//         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//         ref={(player) => { this.player = player }}
//       />
//     </div>
//   );
// }

// export default App;
