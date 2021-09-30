/* eslint-disable prefer-arrow-callback */
import React from 'react';
import * as Tone from 'tone';
import './App.css';
import { checkScrollSpeed } from '../../utils.js';
import Tomato from '../../images/tomato.png';
import Squash from '../../images/squash.png';

window.addEventListener('scroll', function() {
  const speed = checkScrollSpeed();
  console.log(speed / 10);
  return speed / 10;
});



// eslint-disable-next-line max-len
const player = new Tone.Player('https://tonejs.github.io/audio/berklee/femalevoices_aa2_A5.mp3').toDestination();

player.playbackRate = 0.25;


export default function App() {
  return (
    <div>
      <h1>Sounds of the Produce Section</h1>
      <button onClick={() => {
        player.start();
      }}><img src={Tomato} alt="tomato" /></button>
      <button onClick={() => {
        player.start();
      }}><img src={Squash} alt="squash" /></button>
    </div>
  );
}
