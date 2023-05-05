import Playbutton from "./scripts/playButton"
import Timer from "./scripts/timer"

document.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play-button');
    new Playbutton(play)
    play.addEventListener('click', () =>{
        new Timer(10);
        })
})


