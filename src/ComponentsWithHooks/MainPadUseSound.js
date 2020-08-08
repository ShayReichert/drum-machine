import React from 'react';
import useSound from 'use-sound';
import sounds from '../sounds/sounds-pads-1.mp3';

// Autre manière d'importer les sons avec le module Hook useSound, très bien fait. 
// Pour une version non FCC, utilisée ce module, plus propre sans doute.

const AllSounds = () => {
    
    const [play] = useSound(sounds, {
        sprite: {
            apple: [0, 800],
            shortCircuit: [1000, 800],
            waterBallon: [2000, 800],
            fireBow: [4000, 800],
            lightSwitch: [5000, 800],
            marbles: [6000, 800],
            nexkSnap: [8000, 800],
            pinDrop: [9000, 800],
            stringTension: [11000, 800],
        }
    });

    return (

        <div className="main-pad">

            <div id="pad-container">
                <div className="drum-pad" id="10">
                    <audio src="#" className="clip" id="1"></audio>
                    1
                </div>
                <div className="drum-pad" id="11">
                    <audio src="#" className="clip" id="2"></audio>
                    2
                </div>
                <div className="drum-pad" id="12">
                    <audio src="#" className="clip" id="3"></audio>
                    3
                </div>
                <div className="drum-pad" id="13">
                    <audio src="#" className="clip" id="4"></audio>
                    4
                </div>
                <div className="drum-pad" id="1" onMouseDown={() => play({ id: 'apple' })}>
                    <audio src="#" className="clip" id="Q"></audio>
                    Q
                </div>
                <div className="drum-pad" id="2" onMouseDown={() => play({ id: 'apple' })}>
                    <audio src="#" className="clip" id="W"></audio>
                    W
                </div>
                <div className="drum-pad" id="3" onMouseDown={() => play({ id: 'apple' })}>
                    <audio src="#" className="clip" id="E"></audio>
                    E
                </div>
                <div className="drum-pad" id="14">
                    <audio src="#" className="clip" id="R"></audio>
                    R
                </div>
                <div className="drum-pad" id="4" onMouseDown={() => play({ id: 'apple' })}>
                    <audio src="#" className="clip" id="A"></audio>
                    A
                </div>
                <div className="drum-pad" id="5">
                    <audio src="#" className="clip" id="S"></audio>
                    S
                </div>
                <div className="drum-pad" id="6">
                    <audio src="#" className="clip" id="D"></audio>
                    D
                </div>
                <div className="drum-pad" id="15">
                    <audio src="#" className="clip" id="F"></audio>
                    F
                </div>
                <div className="drum-pad" id="7">
                    <audio src="#" className="clip" id="Z"></audio>
                    Z
                </div>
                <div className="drum-pad" id="8">
                    <audio src="#" className="clip" id="X"></audio>
                    X
                </div>
                <div className="drum-pad" id="9">
                    <audio src="#" className="clip" id="C"></audio>
                    C
                </div>
                <div className="drum-pad" id="16">
                    <audio src="#" className="clip" id="V"></audio>
                    V
                </div>
            </div>


        </div>



    )
};


export default AllSounds;