import React, { Component } from 'react';
import './App.scss';
import apple from "./all-the-sounds/apple.mp3";
import shortCircuit from "./all-the-sounds/shortCircuit.mp3";
import waterBalloon from "./all-the-sounds/waterBalloon.mp3";
import fireBow from "./all-the-sounds/fireBow.mp3";
import lightSwith from "./all-the-sounds/lightSwith.mp3";
import marbles from "./all-the-sounds/marbles.mp3";
import neckSnap from "./all-the-sounds/neckSnap.mp3";
import pinDropping from "./all-the-sounds/pinDropping.mp3";
import stringTension from "./all-the-sounds/stringTension.mp3";
import boneBreaking from "./all-the-sounds/bankb/BoneBreaking.mp3";
import aMajor from './all-the-sounds/bankb/808AMajor.mp3';
import dminor from './all-the-sounds/bankb/808Dminor.mp3';
import fsound from './all-the-sounds/bankb/808F.mp3';
import dmajor from './all-the-sounds/bankb/8080Dmajor.mp3';
import charley from './all-the-sounds/bankb/charley01.mp3';
import charleyOpen from './all-the-sounds/bankb/charleyOpen01.mp3';
import kick from './all-the-sounds/bankb/kick01.mp3';
import snare from './all-the-sounds/bankb/snare01.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.sounds = {
      Apple: new Audio(apple),
      ShortCircuit: new Audio(shortCircuit),
      WaterBalloon: new Audio(waterBalloon),
      FireBow: new Audio(fireBow),
      LightSwith: new Audio(lightSwith),
      Marbles: new Audio(marbles),
      NeckSnap: new Audio(neckSnap),
      PinDropping: new Audio(pinDropping),
      StringTension: new Audio(stringTension),

      BoneBreaking: new Audio(boneBreaking),
      AMajor: new Audio(aMajor),
      Dminor: new Audio(dminor),
      Fsound: new Audio(fsound),
      Dmajor: new Audio(dmajor),
      Charley: new Audio(charley),
      CharleyOpen: new Audio(charleyOpen),
      Kick: new Audio(kick),
      Snare: new Audio(snare),

    };
    this.state = {
      Apple: "Apple Sound",
      ShortCircuit: "Short Circuit",
      WaterBalloon: "Water Balloon",
      FireBow: "Fire Bow",
      LightSwith: "Light Swith",
      Marbles: "Marbles",
      NeckSnap: "Neck Snap",
      PinDropping: "Pin Dropping",
      StringTension: "String",

      BoneBreaking: "Bone Breaking",
      AMajor: "808 A Major",
      Dminor: "808 D minor",
      Fsound: "808 F",
      Dmajor: "808 D Major",
      Charley: "Hit Hat",
      CharleyOpen: "Open Hit Hat",
      Kick: "Kick",
      Snare: "Snare",
      default: "",

      volumeValue: "50"
    };
  }

  // OnClick, play sound
  playSound = (e) => {
    const bankLightB = document.getElementById('b-light');
    // Bank b activated
    if (bankLightB.classList.contains('bank-b')) {
      switch (e.currentTarget.childNodes[1].id) {
        case "Qb":
          const BoneBreaking = document.getElementById('Qb');
          this.setState({ default: this.state.BoneBreaking });
          BoneBreaking.volume = this.state.volumeValue / 100;
          BoneBreaking.currentTime = 0;
          BoneBreaking.play();
          break;
        case "Wb":
          const AMajor = document.getElementById('Wb');
          this.setState({ default: this.state.AMajor });
          AMajor.volume = this.state.volumeValue / 100;
          AMajor.currentTime = 0;
          AMajor.play();
          break;
        case "Eb":
          const Dminor = document.getElementById('Eb');
          this.setState({ default: this.state.Dminor });
          Dminor.volume = this.state.volumeValue / 100;
          Dminor.currentTime = 0;
          Dminor.play();
          break;
        case "Ab":
          const Fsound = document.getElementById('Ab');
          this.setState({ default: this.state.Fsound });
          Fsound.volume = this.state.volumeValue / 100;
          Fsound.currentTime = 0;
          Fsound.play();
          break;
        case "Sb":
          const Dmajor = document.getElementById('Sb');
          this.setState({ default: this.state.Dmajor });
          Dmajor.volume = this.state.volumeValue / 100;
          Dmajor.currentTime = 0;
          Dmajor.play();
          break;
        case "Db":
          const Charley = document.getElementById('Db');
          this.setState({ default: this.state.Charley });
          Charley.volume = this.state.volumeValue / 100;
          Charley.currentTime = 0;
          Charley.play();
          break;
        case "Zb":
          const CharleyOpen = document.getElementById('Zb');
          this.setState({ default: this.state.CharleyOpen });
          CharleyOpen.volume = this.state.volumeValue / 100;
          CharleyOpen.currentTime = 0;
          CharleyOpen.play();
          break;
        case "Xb":
          const Kick = document.getElementById('Xb');
          this.setState({ default: this.state.Kick });
          Kick.volume = this.state.volumeValue / 100;
          Kick.currentTime = 0;
          Kick.play();
          break;
        case "Cb":
          const Snare = document.getElementById('Cb');
          this.setState({ default: this.state.Snare });
          Snare.volume = this.state.volumeValue / 100;
          Snare.currentTime = 0;
          Snare.play();
          break;
        default:
          console.log("oops, there is a problem on clicked buttons (bank-b)");
      }
      // Bank a activated
    } else {
      switch (e.currentTarget.childNodes[0].id) {
        case ("Q"):
          const Apple = document.getElementById('Q');
          this.setState({ default: this.state.Apple });
          Apple.volume = this.state.volumeValue / 100;
          Apple.currentTime = 0;
          Apple.play();
          break;
        case ("W"):
          const ShortCircuit = document.getElementById('W');
          this.setState({ default: this.state.ShortCircuit });
          ShortCircuit.volume = this.state.volumeValue / 100;
          ShortCircuit.currentTime = 0;
          ShortCircuit.play();
          break;
        case "E":
          const WaterBalloon = document.getElementById('E');
          this.setState({ default: this.state.WaterBalloon });
          WaterBalloon.volume = this.state.volumeValue / 100;
          WaterBalloon.currentTime = 0;
          WaterBalloon.play();
          break;
        case "A":
          const FireBow = document.getElementById('A');
          this.setState({ default: this.state.FireBow });
          FireBow.volume = this.state.volumeValue / 100;
          FireBow.currentTime = 0;
          FireBow.play();
          break;
        case "S":
          const LightSwith = document.getElementById('S');
          this.setState({ default: this.state.LightSwith });
          LightSwith.volume = this.state.volumeValue / 100;
          LightSwith.currentTime = 0;
          LightSwith.play();
          break;
        case "D":
          const Marbles = document.getElementById('D');
          this.setState({ default: this.state.Marbles });
          Marbles.volume = this.state.volumeValue / 100;
          Marbles.currentTime = 0;
          Marbles.play();
          break;
        case "Z":
          const NeckSnap = document.getElementById('Z');
          this.setState({ default: this.state.NeckSnap });
          NeckSnap.volume = this.state.volumeValue / 100;
          NeckSnap.currentTime = 0;
          NeckSnap.play();
          break;
        case "X":
          const PinDropping = document.getElementById('X');
          this.setState({ default: this.state.PinDropping });
          PinDropping.volume = this.state.volumeValue / 100;
          PinDropping.currentTime = 0;
          PinDropping.play();
          break;
        case "C":
          const StringTension = document.getElementById('C');
          this.setState({ default: this.state.StringTension });
          StringTension.volume = this.state.volumeValue / 100;
          StringTension.currentTime = 0;
          StringTension.play();
          break;
        default:
          console.log("oops, there is a problem on clicked buttons (bank-a)");
      }
    }
  }

  // OnKeyDown, play sound
  keyPressed = (e) => {
    const bankLightB = document.getElementById('b-light');
    // Bank b activated
    if (bankLightB.classList.contains('bank-b')) {
      switch (e.code) {
        case "KeyQ":
          const BoneBreaking = document.getElementById('Qb');
          this.setState({ default: this.state.BoneBreaking });
          BoneBreaking.volume = this.state.volumeValue / 100;
          BoneBreaking.currentTime = 0;
          BoneBreaking.play();
          break;
        case "KeyW":
          const AMajor = document.getElementById('Wb');
          this.setState({ default: this.state.AMajor });
          AMajor.volume = this.state.volumeValue / 100;
          AMajor.currentTime = 0;
          AMajor.play();
          break;
        case "KeyE":
          const Dminor = document.getElementById('Eb');
          this.setState({ default: this.state.Dminor });
          Dminor.volume = this.state.volumeValue / 100;
          Dminor.currentTime = 0;
          Dminor.play();
          break;
        case "KeyA":
          const Fsound = document.getElementById('Ab');
          this.setState({ default: this.state.Fsound });
          Fsound.volume = this.state.volumeValue / 100;
          Fsound.currentTime = 0;
          Fsound.play();
          break;
        case "KeyS":
          const Dmajor = document.getElementById('Sb');
          this.setState({ default: this.state.Dmajor });
          Dmajor.volume = this.state.volumeValue / 100;
          Dmajor.currentTime = 0;
          Dmajor.play();
          break;
        case "KeyD":
          const Charley = document.getElementById('Db');
          this.setState({ default: this.state.Charley });
          Charley.volume = this.state.volumeValue / 100;
          Charley.currentTime = 0;
          Charley.play();
          break;
        case "KeyZ":
          const CharleyOpen = document.getElementById('Zb');
          this.setState({ default: this.state.CharleyOpen });
          CharleyOpen.volume = this.state.volumeValue / 100;
          CharleyOpen.currentTime = 0;
          CharleyOpen.play();
          break;
        case "KeyX":
          const Kick = document.getElementById('Xb');
          this.setState({ default: this.state.Kick });
          Kick.volume = this.state.volumeValue / 100;
          Kick.currentTime = 0;
          Kick.play();
          break;
        case "KeyC":
          const Snare = document.getElementById('Cb');
          this.setState({ default: this.state.Snare });
          Snare.volume = this.state.volumeValue / 100;
          Snare.currentTime = 0;
          Snare.play();
          break;
        case "MetaLeft":
          this.changeBank();
          break;
        default:
          console.log("oops, there is a problem on keys pressed");
      }
      // Bank a activated
    } else {
      switch (e.code) {
        case "KeyQ":
          const Apple = document.getElementById('Q');
          this.setState({ default: this.state.Apple });
          Apple.volume = this.state.volumeValue / 100;
          Apple.currentTime = 0;
          Apple.play();
          break;
        case "KeyW":
          const ShortCircuit = document.getElementById('W');
          this.setState({ default: this.state.ShortCircuit });
          ShortCircuit.volume = this.state.volumeValue / 100;
          ShortCircuit.currentTime = 0;
          ShortCircuit.play();
          break;
        case "KeyE":
          const WaterBalloon = document.getElementById('E');
          this.setState({ default: this.state.WaterBalloon });
          WaterBalloon.volume = this.state.volumeValue / 100;
          WaterBalloon.currentTime = 0;
          WaterBalloon.play();
          break;
        case "KeyA":
          const FireBow = document.getElementById('A');
          this.setState({ default: this.state.FireBow });
          FireBow.volume = this.state.volumeValue / 100;
          FireBow.currentTime = 0;
          FireBow.play();
          break;
        case "KeyS":
          const LightSwith = document.getElementById('S');
          this.setState({ default: this.state.LightSwith });
          LightSwith.volume = this.state.volumeValue / 100;
          LightSwith.currentTime = 0;
          LightSwith.play();
          break;
        case "KeyD":
          const Marbles = document.getElementById('D');
          this.setState({ default: this.state.Marbles });
          Marbles.volume = this.state.volumeValue / 100;
          Marbles.currentTime = 0;
          Marbles.play();
          break;
        case "KeyZ":
          const NeckSnap = document.getElementById('Z');
          this.setState({ default: this.state.NeckSnap });
          NeckSnap.volume = this.state.volumeValue / 100;
          NeckSnap.currentTime = 0;
          NeckSnap.play();
          break;
        case "KeyX":
          const PinDropping = document.getElementById('X');
          this.setState({ default: this.state.PinDropping });
          PinDropping.volume = this.state.volumeValue / 100;
          PinDropping.currentTime = 0;
          PinDropping.play();
          break;
        case "KeyC":
          const StringTension = document.getElementById('C');
          this.setState({ default: this.state.StringTension });
          StringTension.volume = this.state.volumeValue / 100;
          StringTension.currentTime = 0;
          StringTension.play();
          break;
        case "MetaLeft":
          this.changeBank();
          break;
        default:
          console.log("oops, there is a problem on keys pressed");
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed, false)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false)
  }

  changeBank = () => {
    const bankLightA = document.getElementById('a-light');
    const bankLightB = document.getElementById('b-light');
    bankLightA.classList.toggle('bank-a');
    bankLightB.classList.toggle('bank-b');
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
                <p>{this.state.default}</p>
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

                <div data-key="keyQ" onClick={this.playSound} className="drum-pad" id="Apple">
                  <audio data-key="65" src={apple} className="clip" id="Q" type="audio/mp3" />
                  {/* <audio data-key="65" src={boneBreaking} className="clip" id="Qb" type="audio/mp3" /> */}
                               Q
                            </div>
                <div data-key="keyW" onClick={this.playSound} className="drum-pad" id="ShortCircuit">
                  <audio data-key="87" src={shortCircuit} className="clip" id="W" type="audio/mp3" />
                  {/* <audio data-key="87" src={aMajor} className="clip" id="Wb" type="audio/mp3" /> */}
                                W
                            </div>
                <div data-key="keyE" onClick={this.playSound} className="drum-pad" id="WaterBalloon">
                  <audio data-key="87" src={waterBalloon} className="clip" id="E" />
                  {/* <audio data-key="87" src={dminor} className="clip" id="Eb" /> */}
                                E
                            </div>
                <div data-key="keyA" onClick={this.playSound} className="drum-pad" id="FireBow">
                  <audio data-key="87" src={fireBow} className="clip" id="A" />
                  {/* <audio data-key="87" src={fsound} className="clip" id="Ab" /> */}
                                A
                            </div>
                <div data-key="keyS" onClick={this.playSound} className="drum-pad" id="LightSwith">
                  <audio data-key="87" src={lightSwith} className="clip" id="S" />
                  {/* <audio data-key="87" src={dmajor} className="clip" id="Sb" /> */}
                                S
                            </div>
                <div data-key="keyD" onClick={this.playSound} className="drum-pad" id="Marbles">
                  <audio data-key="87" src={marbles} className="clip" id="D" />
                  {/* <audio data-key="87" src={charley} className="clip" id="Db" /> */}
                                D
                            </div>
                <div data-key="keyZ" onClick={this.playSound} className="drum-pad" id="NeckSnap">
                  <audio data-key="87" src={neckSnap} className="clip" id="Z" />
                  {/* <audio data-key="87" src={charleyOpen} className="clip" id="Zb" /> */}
                                Z
                            </div>
                <div data-key="keyX" onClick={this.playSound} className="drum-pad" id="PinDropping">
                  <audio data-key="87" src={pinDropping} className="clip" id="X" />
                  {/* <audio data-key="87" src={kick} className="clip" id="Xb" /> */}
                                X
                            </div>
                <div data-key="keyC" onClick={this.playSound} className="drum-pad" id="StringTension">
                  <audio data-key="87" src={stringTension} className="clip" id="C" />
                  {/* <audio data-key="87" src={snare} className="clip" id="Cb" /> */}
                                C
                            </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    )
  }
};

export default App;
