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
    let mainTimer = document.getElementById("game-timer")
    mainTimer = new Timer(16,mainTimer);//kinda hacky way to have the main timer start
    mainTimer.start();
    let lyrics = new Lyrics();
    const fifty_fifty = document.getElementById('fifty-fifty');
    new FiftyFifty(fifty_fifty)
    const second_chance = document.getElementById('second-chance');
    new SecondChance(second_chance)            
    const button1 = document.getElementById('button1');
    new Button1(button1, lyrics, mainTimer);
    const button2 = document.getElementById('button2');
    new Button2(button2, lyrics, mainTimer)
    const button3 = document.getElementById('button3');
    new Button3(button3, lyrics, mainTimer)
    const button4 = document.getElementById('button4');
    new Button4(button4, lyrics, mainTimer)
    const nextQuestion = document.getElementById('next-question');
    new NextQuestionButton(nextQuestion);
    let readyTimer = document.getElementById("ready-timer")

    scores.forEach(score=> {
        score.textContent = 0
      })

    counters.forEach(counter => {
        counter.textContent = 0;
    });
    
    new Playbutton(play)
    
    play.addEventListener('click', () =>{
      readyTimer = new Timer(5,readyTimer);
      readyTimer.start();

      counters.forEach(counter => {
          counter.textContent = parseInt(counter.textContent) + 1;
      });
    })


    nextQuestion.addEventListener("click", async () => {
      const counter = document.querySelector(".questionCounter")
    
      if (counter.textContent !== "3") {
        const readyScreen = document.querySelector(".ready-screen");
        const innerDiv3 = document.querySelector(".inner-div3");
        const buttons = document.querySelectorAll(".choice");
    
        counters.forEach(counter => {
          counter.textContent = parseInt(counter.textContent) + 1;
        });
    
        await lyrics.getNewLyrics();
      
      mainTimer.time = 15;
      readyTimer.time = 6
      readyTimer.start();
      buttons.forEach(button => {
        button.setAttribute('data-answer', 'incorrect');
        button.style.backgroundColor = 'white'
        button.disabled = false;
      });
      setTimeout(() => {
        readyScreen.style.display = "block";
        innerDiv3.style.display = "none";
      }, 1000);
        mainTimer.start();
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


