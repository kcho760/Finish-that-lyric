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
import Spotifyapi from "./scripts/spotifyapi";
import SpotifyPlayer from "./scripts/spotify_player";

document.addEventListener('DOMContentLoaded', () => {
  const scores = document.querySelectorAll('.score');
  const counters = document.querySelectorAll('.questionCounter');
  let mainTimer = document.getElementById('game-timer');
  let lyrics;

  const loadLyrics = async () => {
    lyrics = new Lyrics();
    await lyrics.getNewLyrics();
    mainTimer = new Timer(13, mainTimer);
    const fifty_fifty = document.getElementById('fifty-fifty');
    new FiftyFifty(fifty_fifty);
    const second_chance = document.getElementById('second-chance');
    new SecondChance(second_chance);
    const button1 = document.getElementById('button1');
    new Button1(button1, lyrics, mainTimer);
    const button2 = document.getElementById('button2');
    new Button2(button2, lyrics, mainTimer);
    const button3 = document.getElementById('button3');
    new Button3(button3, lyrics, mainTimer);
    const button4 = document.getElementById('button4');
    new Button4(button4, lyrics, mainTimer);
  };
  
  const nextQuestion = document.getElementById('next-question');
  new NextQuestionButton(nextQuestion);
  scores.forEach(score=> {
    score.textContent = 0
  })
  
  counters.forEach(counter => {
    counter.textContent = 0;
  });

  const playButton = document.getElementById('play-button');

  new Playbutton(playButton);

  const trackName = document.getElementById('track-name').textContent;
  let spotify = new Spotifyapi(trackName);

  spotify.authenticate().then(() => {
    spotify.getTrack().then((data) => { // spotify track data
      const trackId = data.id;
      const token = spotify.accessToken;
      window.onSpotifyWebPlaybackSDKReady = () => {
        const spotifyPlayer = new SpotifyPlayer(trackId, token);
        spotifyPlayer.init();
      };
      
    }).catch((error) => {
      console.error(error);
    });
  }).catch((error) => {
    console.error(error);
  });

  playButton.addEventListener('click', async () => {
    let readyTimer = new Timer(3, document.getElementById("ready-timer"));
    readyTimer.start();
    mainTimer.start();
    counters.forEach(counter => {
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  });

  
  
  nextQuestion.addEventListener("click", async () => {
    const counter = document.querySelector(".questionCounter")
    
    if (counter.textContent !== "3") {
      let readyTimer = document.getElementById('ready-timer');
      readyTimer = new Timer(5, readyTimer)
      const readyScreen = document.querySelector(".ready-screen");
      const innerDiv3 = document.querySelector(".inner-div3");
      const buttons = document.querySelectorAll(".choice");
      counters.forEach(counter => {
        counter.textContent = parseInt(counter.textContent) + 1;
      });
      
      await lyrics.getNewLyrics(trackName);
      mainTimer.time = 13;
      readyTimer.time = 3
      readyTimer.start();
      buttons.forEach(button => {
        button.setAttribute('data-answer', 'incorrect');
        button.style.backgroundColor = 'white'
        button.disabled = false;
      });
      setTimeout(() => {
        const trackName = document.getElementById('track-name').textContent;
        let spotify = new Spotifyapi(trackName);
        console.log(spotify.trackName);
        readyScreen.style.display = "block";
        innerDiv3.style.display = "none";
      }, 100);
      mainTimer.start();
    } else {
      mainTimer.time = 13;
      const finalScore = document.querySelector(".final-score")
      const score = document.getElementById("score")
      finalScore.textContent = `${score.textContent} / ${counter.textContent}`
      const innerDiv3 = document.querySelector(".inner-div3");
        const innerDiv4 = document.querySelector(".inner-div4");
        innerDiv3.style.display = "none";
        innerDiv4.style.display = "block";
      }
    });
    
    loadLyrics();
    
  })
  
  
  