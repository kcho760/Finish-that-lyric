import Playbutton from "./scripts/playButton"

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('play-button');
    new Playbutton(button)
})

