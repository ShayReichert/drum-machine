import React, { Component } from 'react';
import './App.scss';


// kick 2 : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/152[kb]bigcheeks-kick.wav.mp3
// Snare 2 : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/51[kb]ec-sn016.wav.mp3
// Clap 2 : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/86[kb]cleap-real-2-verb2cleap-real.wav.mp3 
// Hit Hat 2 : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/23[kb]chh808.aif.mp3
// Clic 2 : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/24[kb]ti-ri.aif.mp3
// Melodic 2 A : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/299[kb]one-gentle-epiano-hit.wav.mp3
// Melodic 2 B : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/356[kb]one-staggered-epiano-chord-2.wav.mp3
// Melodic 2 C : https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/274[kb]one-staggered-epiano-chord.wav.mp3 
// TrumpThatTrue : https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Donald%20Trump%20Construction%20Kit/252[kb]trump-thats-true.wav.mp3 

const bankA = [
  {
    keyCode: 81,
    key: "Q",
    id: "Kick",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/53[kb]ec-kik007.wav.mp3"
  },
  {
    keyCode: 87,
    key: "W",
    id: "Snare",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]ec-sn022.wav.mp3"
  },
  {
    keyCode: 69,
    key: "E",
    id: "Clap",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/102[kb]c5.aif.mp3"
  },
  {
    keyCode: 65,
    key: "A",
    id: "Hit Hat",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/9[kb]ec-hat024.wav.mp3"
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clic",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/24[kb]ti-ri.aif.mp3"
  },
  {
    keyCode: 68,
    key: "D",
    id: "Melodic01",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-4.wav.mp3"
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Melodic02",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-12.wav.mp3"
  },
  {
    keyCode: 88,
    key: "X",
    id: "Melodic03",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-1.wav.mp3"
  },
  {
    keyCode: 67,
    key: "C",
    id: "Melodic04",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-10.wav.mp3"
  }
]



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: {},
      id: '',
      volumeValue: "50"
    };
  }

  // poubelle, trucs à récupérer peut-être ? 
  // const bankLightB = document.getElementByid('b-light');
  // if (bankLightB.classList.contains('bank-b')
  // switch (e.currentTarget.childNodes[1].id) 

  playSound = (soundKey) => {
    console.log(soundKey);
    const sound = document.getElementById(soundKey);
    sound.currentTime = 0;
    sound.play();

  }

  handleClick = index => {
    // console.log(this, bankA[index]);
    this.setState({
      ...this.state,
      sound: bankA[index],
      id: bankA[index].id
    });
    let soundKey = bankA[index].key;
    this.playSound(soundKey);
  };

  // OnKeyDown, play sound
  // keyPressed = (e) => {

  // }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed, false)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false)
  }

  changeBank = () => {
    const bankLightA = document.getElementByid('a-light');
    const bankLightB = document.getElementByid('b-light');
    bankLightA.classList.toggle('bank-a');
    bankLightB.classList.toggle('bank-b');
  }
  changeVolume = () => {
    const barProgress = document.getElementByid('volume-control');
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
                <p>{this.state.sound == null ? "" : this.state.sound.id}</p>
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
                  //  console.log(item.key)
                  return (
                    <div className="drum-pad"
                      key={index}
                      id={item.id}
                      onClick={() => this.handleClick(index)} >
                        <audio className="clip" id={item.key} src={item.src} /> 
                        {item.key} 
                        </div>
                      );
                      })}

                      {/* <div data-key="keyQ" onClick={this.playSound} className="drum-pad" id="Apple">
                        <audio data-key="65" src={apple} className="clip" id="Q" type="audio/mp3" />
                        <audio data-key="65" src={boneBreaking} className="clip" id="Qb" type="audio/mp3" />
                               Q
                            </div>
                      <div data-key="keyW" onClick={this.playSound} className="drum-pad" id="ShortCircuit">
                        <audio data-key="87" src={shortCircuit} className="clip" id="W" type="audio/mp3" />
                        <audio data-key="87" src={aMajor} className="clip" id="Wb" type="audio/mp3" />
                                W
                            </div>
                      <div data-key="keyE" onClick={this.playSound} className="drum-pad" id="WaterBalloon">
                        <audio data-key="87" src={waterBalloon} className="clip" id="E" />
                        <audio data-key="87" src={dminor} className="clip" id="Eb" />
                                E
                            </div>
                      <div data-key="keyA" onClick={this.playSound} className="drum-pad" id="FireBow">
                        <audio data-key="87" src={fireBow} className="clip" id="A" />
                        <audio data-key="87" src={fsound} className="clip" id="Ab" />
                                A
                            </div>
                      <div data-key="keyS" onClick={this.playSound} className="drum-pad" id="LightSwith">
                        <audio data-key="87" src={lightSwith} className="clip" id="S" />
                        <audio data-key="87" src={dmajor} className="clip" id="Sb" />
                                S
                            </div>
                      <div data-key="keyD" onClick={this.playSound} className="drum-pad" id="Marbles">
                        <audio data-key="87" src={marbles} className="clip" id="D" />
                        <audio data-key="87" src={charley} className="clip" id="Db" />
                                D
                            </div>
                      <div data-key="keyZ" onClick={this.playSound} className="drum-pad" id="NeckSnap">
                        <audio data-key="87" src={neckSnap} className="clip" id="Z" />
                        <audio data-key="87" src={charleyOpen} className="clip" id="Zb" />
                                Z
                            </div>
                      <div data-key="keyX" onClick={this.playSound} className="drum-pad" id="PinDropping">
                        <audio data-key="87" src={pinDropping} className="clip" id="X" />
                        <audio data-key="87" src={kick} className="clip" id="Xb" />
                                X
                            </div>
                      <div data-key="keyC" onClick={this.playSound} className="drum-pad" id="StringTension">
                        <audio data-key="87" src={stringTension} className="clip" id="C" />
                        <audio data-key="87" src={snare} className="clip" id="Cb" />
                                C
                            </div> */}
                    </div>
            </div>

            </div>


          </div>
        </div>
    )
  }
};

export default App;
