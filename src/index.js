import Playbutton from "./scripts/playButton"
import Lyrics from "./scripts/lyrics";
import FiftyFifty from "./scripts/fifty_fifty";
import SecondChance from "./scripts/second_chance";
import Button1 from "./scripts/button1";
import Button2 from "./scripts/button2";
import Button3 from "./scripts/button3";
import Button4 from "./scripts/button4";

import Timer from "./scripts/timer"

document.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play-button');
    new Playbutton(play)
    play.addEventListener('click', () =>{
        new Timer(10);
        })

    const fifty_fifty = document.getElementById('fifty-fifty');
    new FiftyFifty(fifty_fifty)    
    const second_chance = document.getElementById('second-chance');
    new SecondChance(second_chance)            
    const button1 = document.getElementById('button1');
    new Button1(button1)
    const button2 = document.getElementById('button2');
    new Button2(button2)
    const button3 = document.getElementById('button3');
    new Button3(button3)
    const button4 = document.getElementById('button4');
    new Button4(button4)

    const lyrics = new Lyrics

})


