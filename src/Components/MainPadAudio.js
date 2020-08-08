import React, { Component } from 'react';
import apple from "./all-the-sounds/apple.mp3";
import shortCircuit from "./all-the-sounds/shortCircuit.mp3";
import waterBalloon from "./all-the-sounds/waterBalloon.mp3";
import fireBow from "./all-the-sounds/fireBow.mp3";
import lightSwith from "./all-the-sounds/lightSwith.mp3";
import marbles from "./all-the-sounds/marbles.mp3";
import neckSnap from "./all-the-sounds/neckSnap.mp3";
import pinDropping from "./all-the-sounds/pinDropping.mp3";
import stringTension from "./all-the-sounds/stringTension.mp3";




class MainPad extends Component {

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
            default: "Click or Press to get started"
          };
    }

    // OnClick, play sound
    playSound = (e) => {
        switch (e.currentTarget.childNodes[0].id) {
            case "Q":
                const Apple = document.getElementById('Q');
                this.setState({ default: this.state.Apple });
                Apple.currentTime = 0;
                Apple.play();
                break;
            case "W":
                const ShortCircuit = document.getElementById('W');
                this.setState({ default: this.state.ShortCircuit });
                ShortCircuit.currentTime = 0;
                ShortCircuit.play();
                break;
            case "E":
                const WaterBalloon = document.getElementById('E');
                this.setState({ default: this.state.WaterBalloon });
                WaterBalloon.currentTime = 0;
                WaterBalloon.play();
                break;
            case "A":
                const FireBow = document.getElementById('A');
                this.setState({ default: this.state.FireBow });
                FireBow.currentTime = 0;
                FireBow.play();
                break;
            case "S":
                const LightSwith = document.getElementById('S');
                this.setState({ default: this.state.LightSwith });
                LightSwith.currentTime = 0;
                LightSwith.play();
                break;
            case "D":
                const Marbles = document.getElementById('D');
                this.setState({ default: this.state.Marbles });
                Marbles.currentTime = 0;
                Marbles.play();
                break;
            case "Z":
                const NeckSnap = document.getElementById('Z');
                this.setState({ default: this.state.NeckSnap });
                NeckSnap.currentTime = 0;
                NeckSnap.play();
                break;
            case "X":
                const PinDropping = document.getElementById('X');
                this.setState({ default: this.state.PinDropping });
                PinDropping.currentTime = 0;
                PinDropping.play();
                break;
            case "C":
                const StringTension = document.getElementById('C');
                this.setState({ default: this.state.StringTension });
                StringTension.currentTime = 0;
                StringTension.play();
                break;
            default:
                console.log("oops, there is a problem on clicked buttons");
        }
    }


    // OnKeyDown, play sound
    keyPressed = (e) => {
        switch (e.code) {
            case "KeyQ":
                const Apple = document.getElementById('Q');
                this.setState({ default: this.state.Apple });
                Apple.currentTime = 0;
                Apple.play();
                break;
            case "KeyW":
                const ShortCircuit = document.getElementById('W');
                this.setState({ default: this.state.ShortCircuit });
                ShortCircuit.currentTime = 0;
                ShortCircuit.play();
                break;
            case "KeyE":
                const WaterBalloon = document.getElementById('E');
                this.setState({ default: this.state.WaterBalloon });
                WaterBalloon.currentTime = 0;
                WaterBalloon.play();
                break;
            case "KeyA":
                const FireBow = document.getElementById('A');
                this.setState({ default: this.state.FireBow });
                FireBow.currentTime = 0;
                FireBow.play();
                break;
            case "KeyS":
                const LightSwith = document.getElementById('S');
                this.setState({ default: this.state.LightSwith });
                LightSwith.currentTime = 0;
                LightSwith.play();
                break;
            case "KeyD":
                const Marbles = document.getElementById('D');
                this.setState({ default: this.state.Marbles });
                Marbles.currentTime = 0;
                Marbles.play();
                break;
            case "KeyZ":
                const NeckSnap = document.getElementById('Z');
                this.setState({ default: this.state.NeckSnap });
                NeckSnap.currentTime = 0;
                NeckSnap.play();
                break;
            case "KeyX":
                const PinDropping = document.getElementById('X');
                this.setState({ default: this.state.PinDropping });
                PinDropping.currentTime = 0;
                PinDropping.play();
                break;
            case "KeyC":
                const StringTension = document.getElementById('C');
                this.setState({ default: this.state.StringTension });
                StringTension.currentTime = 0;
                StringTension.play();
                break;
            default:
                console.log("oops, there is a problem on keys pressed");
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyPressed, false)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressed, false)
    }

    render() {
        return (
            <div className="main-pad">

                <div id="pad-container">

                        <div data-key="keyQ" onClick={this.playSound} className="drum-pad" id="Apple">
                            <audio data-key="65" src={apple} className="clip" id="Q" type="audio/mp3" />
                               Q 
                            </div>
                        <div data-key="keyW" onClick={this.playSound} className="drum-pad" id="ShortCircuit">
                            <audio data-key="87" src={shortCircuit} className="clip" id="W" type="audio/mp3" />
                                W
                            </div>
                        <div data-key="keyE" onClick={this.playSound} className="drum-pad" id="WaterBalloon">
                            <audio data-key="87" src={waterBalloon} className="clip" id="E" />
                                E
                            </div>
                        {/* <div className="drum-pad" id="14">
                        <audio src="#" className="clip" id="R"></audio>
                                R
                            </div> */}
                        <div data-key="keyA" onClick={this.playSound} className="drum-pad" id="FireBow">
                            <audio data-key="87" src={fireBow} className="clip" id="A" />
                                A
                            </div>
                        <div data-key="keyS" onClick={this.playSound} className="drum-pad" id="LightSwith">
                            <audio data-key="87" src={lightSwith} className="clip" id="S" />
                                S
                            </div>
                        <div data-key="keyD" onClick={this.playSound} className="drum-pad" id="Marbles">
                            <audio data-key="87" src={marbles} className="clip" id="D" />
                                D
                            </div>
                        {/* <div className="drum-pad" id="15">
                        <audio src="#" className="clip" id="F"></audio>
                                F
                            </div> */}
                        <div data-key="keyZ" onClick={this.playSound} className="drum-pad" id="NeckSnap">
                            <audio data-key="87" src={neckSnap} className="clip" id="Z" />
                                Z
                            </div>
                        <div data-key="keyX" onClick={this.playSound} className="drum-pad" id="PinDropping">
                            <audio data-key="87" src={pinDropping} className="clip" id="X" />
                                X
                            </div>
                        <div data-key="keyC" onClick={this.playSound} className="drum-pad" id="StringTension">
                            <audio data-key="87" src={stringTension} className="clip" id="C" />
                                C
                            </div>
                        {/* <div className="drum-pad" id="16">
                        <audio src="#" className="clip" id="V"></audio>
                                V
                            </div> */}
                    </div>
                </div>

        )

    }

};


export default MainPad;