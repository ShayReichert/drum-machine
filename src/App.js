import React, { Component } from 'react';
import './App.scss';

// allSounds
const bankA = [
  {
    keyCode: 81,
    key: "Q",
    id: "Kick",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/53[kb]ec-kik007.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/152[kb]bigcheeks-kick.wav.mp3"
  },
  {
    keyCode: 87,
    key: "W",
    id: "Snare",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]ec-sn022.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/51[kb]ec-sn016.wav.mp3"
  },
  {
    keyCode: 69,
    key: "E",
    id: "Clap",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/102[kb]c5.aif.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/86[kb]cleap-real-2-verb2cleap-real.wav.mp3"
  },
  {
    keyCode: 65,
    key: "A",
    id: "Hit Hat",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/9[kb]ec-hat024.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/23[kb]chh808.aif.mp3"
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clic",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/24[kb]ti-ri.aif.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/24[kb]ti-ri.aif.mp3"
  },
  {
    keyCode: 68,
    key: "D",
    id: "Melodic01",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-4.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/299[kb]one-gentle-epiano-hit.wav.mp3"
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Melodic02",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-12.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/356[kb]one-staggered-epiano-chord-2.wav.mp3"
  },
  {
    keyCode: 88,
    key: "X",
    id: "Melodic03",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-1.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/274[kb]one-staggered-epiano-chord.wav.mp3"
  },
  {
    keyCode: 67,
    key: "C",
    id: "Melodic04",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-10.wav.mp3",
    src2: "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Donald%20Trump%20Construction%20Kit/252[kb]trump-thats-true.wav.mp3"
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: {},
      id: '',
      volumeValue: "50",
      default: '',
      bankBGreen: false
    };
  }

  //handleOnClicked
  playSound = (soundKey) => {
    const sound = document.getElementById(soundKey);
    sound.volume = this.state.volumeValue / 100;
    this.setState({
      default: this.state.sound.id
    })
    sound.currentTime = 0;
    sound.play();

  }
  handleClick = index => {
    this.setState({
      ...this.state,
      sound: bankA[index],
      id: bankA[index].id
    });
    let soundKey = bankA[index].key;
    this.playSound(soundKey);
  };

  // handleOnKeyDown
  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed, false)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false)
  }
  keyPressed = (e) => {
    bankA.map(keySound => {
      if (keySound.keyCode === e.keyCode) {
        this.setState({
          ...this.state,
          sound: keySound,
          id: keySound.id
        })
        let soundId = this.state.sound.key
        this.playSound(soundId)
      }
      return keySound
    })
  }

  // handleFeatures
  changeBank = () => {
    document.getElementById('a-light').classList.toggle('bank-a');
    document.getElementById('b-light').classList.toggle('bank-b');
    this.setState({
      bankBGreen: !this.state.bankBGreen
    })
  }
  changeVolume = () => {
    const barProgress = document.getElementById('volume-control');
    this.setState({
      volumeValue: barProgress.value,
      default: this.state.volumeValue
    })
  }
  setVolume = () => {
    const audioElements = document.getElementsByClassName('clip');
    audioElements.volume = this.state.volumeValue;
  }


  render() {

    return (
      <div className="App">
        <div id="drum-machine">
          <div className="row1">

            <div id="display">
              <div id="display-inside">
                <p>
                  {this.state.default}             
                </p>
              </div>
            </div>

            <div id="titre-machine">
              <h1>FCC 2020</h1>
              <div className="red-line"></div>
              <h2>Drum Machine</h2>
            </div>

          </div>


          <div className="row2">

            <div id="main-button-main-volume">
              <div id="main-volume">
                <input type="range" min="0" max="100" onInput={this.changeVolume} id="volume-control" />
              </div>
            </div>


            <div id="main-pad-bank">

              <div id="indicators">
                <div id="a-indicator">
                  A
                <div className="light-indicator" id="a-light"></div>
                </div>

                <div id="b-incator">
                  <div className="light-indicator" id="b-light"></div>
                 B
                </div>
              </div>

              <div id="main-button-pad-bank">
                PAD BANK
                <div id="button-pad" onClick={this.changeBank}></div>
              </div>

            </div>

            <div className="main-pad">

              <div id="pad-container">

                {bankA.map((item, index) => {
                  // changed bank sounds (when Pad Bank clicked)
                  const srcAudio = this.state.bankBGreen ?
                    (<audio className="clip" id={item.key} src={item.src2} />)
                    : (<audio className="clip" id={item.key} src={item.src} />)

                  return (
                    <div className="drum-pad"
                      key={index}
                      id={item.id}
                      onClick={() => this.handleClick(index)} >
                      {srcAudio}
                      {item.key}
                    </div>
                  );

                })}

              </div>

            </div>

          </div>


        </div>
      </div>
    )
  }
};

export default App;
