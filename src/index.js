import Playbutton from "./scripts/playButton"
import Lyrics from "./scripts/lyrics";
import FiftyFifty from "./scripts/fifty_fifty";
import SecondChance from "./scripts/second_chance";
import Button1 from "./scripts/button1";
import Button2 from "./scripts/button2";
import Button3 from "./scripts/button3";
import Button4 from "./scripts/button4";
import NextQuestionButton from "./scripts/nextQuestionButton";
import Timer from "./scripts/timer"

document.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play-button');
    const scores = document.querySelectorAll(".score");
    const counters = document.querySelectorAll(".questionCounter")
    scores.forEach(score=> {
        score.textContent = 0
      })

    counters.forEach(counter => {
        counter.textContent = 0;
    });

    let timer = new Timer(600);
    let lyrics = new Lyrics();
    
    new Playbutton(play)
    
    play.addEventListener('click', () =>{
        timer.start();
        counters.forEach(counter => {
            counter.textContent = parseInt(counter.textContent) + 1;
      });
    })

    const fifty_fifty = document.getElementById('fifty-fifty');
    new FiftyFifty(fifty_fifty)
    const second_chance = document.getElementById('second-chance');
    new SecondChance(second_chance)            
    const button1 = document.getElementById('button1');
    new Button1(button1, lyrics, timer);
    const button2 = document.getElementById('button2');
    new Button2(button2, lyrics, timer)
    const button3 = document.getElementById('button3');
    new Button3(button3, lyrics, timer)
    const button4 = document.getElementById('button4');
    new Button4(button4, lyrics, timer)
    const nextQuestion = document.getElementById('next-question');
    new NextQuestionButton(nextQuestion);

    nextQuestion.addEventListener("click", async () => {
      const counter = document.querySelector(".questionCounter")
    
      if (counter.textContent !== "3") {
        const innerDiv2 = document.querySelector(".inner-div2");
        const innerDiv3 = document.querySelector(".inner-div3");
    
        counters.forEach(counter => {
          counter.textContent = parseInt(counter.textContent) + 1;
        });
    
        await lyrics.getNewLyrics();
    
        timer.stop();
        timer.time = 600; // reset the time to 10 seconds
        timer.start();
        const buttons = document.querySelectorAll(".choice");
        buttons.forEach(button => {
          button.setAttribute('data-answer', 'incorrect');
          button.style.backgroundColor = 'white'
          button.disabled = false;
        });
        innerDiv2.style.display = "block";
        innerDiv3.style.display = "none";
      } else {
        const finalScore = document.querySelector(".final-score")
        const score = document.getElementById("score")
        finalScore.textContent = `${score.textContent} / ${counter.textContent}`
        const innerDiv3 = document.querySelector(".inner-div3");
        const innerDiv4 = document.querySelector(".inner-div4");
        innerDiv3.style.display = "none";
        innerDiv4.style.display = "block";
      }
    });
    


})


