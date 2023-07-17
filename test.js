// import Playbutton from "./scripts/playButton";
// import Lyrics from "./scripts/lyrics";
// import FiftyFifty from "./scripts/fifty_fifty";
// import SecondChance from "./scripts/second_chance";
// import Button1 from "./scripts/button1";
// import Button2 from "./scripts/button2";
// import Button3 from "./scripts/button3";
// import Button4 from "./scripts/button4";
// import NextQuestionButton from "./scripts/nextQuestionButton";
// import Timer from "./scripts/timer"

// const state = { points: 0 };
// const numQuestions = {number: 3 };


// document.addEventListener('DOMContentLoaded',async () => {
//   const clickMe = document.getElementById('click-me');
//   const myAudio = document.getElementById('myAudio');
//   clickMe.addEventListener('click', async () => {
//     const startDiv = document.getElementById('start-div');
//     myAudio.play();
//     startDiv.classList.add('move-up');
//   });
//   const muteButton = document.querySelector('#mute-button');
//     muteButton.addEventListener('click', () => {
//       myAudio.muted = !myAudio.muted;
//       if (myAudio.muted) {
//         muteButton.setAttribute('src', 'dist/pictures/mute.png');
//       } else {
//         muteButton.setAttribute('src', 'dist/pictures/soundon.png');
//       }
//     });

//     const soundCheckbox = document.getElementById('sound-checkbox');
//     const audioElement = document.getElementById('myAudio');
//     soundCheckbox.addEventListener('change', function() {
//       if (this.checked) {
//         audioElement.muted = true;
//       } else {
//         audioElement.muted = false;
//       }
//     });
    
    
//     const settingsButton = document.getElementById('settings-button');
//     const settingsMenu = document.getElementById('inner-div-settings');
    
//     settingsButton.addEventListener('click', () => {
//       if (settingsMenu.style.display !== 'block'){
//         settingsMenu.style.display = 'block'
//       }else{
//         settingsMenu.style.display = 'none'
//       };
//     });

//     const htpButton = document.getElementById('htp-button');
//     const htpMenu = document.getElementById('how-to-play-menu');

//     htpButton.addEventListener('click', () => {
//       if (htpMenu.style.display !== 'block'){
//         htpMenu.style.display = 'block'
//       } else {
//         htpMenu.style.display = 'none'
//       };
//     });

  

//     const scores = document.querySelectorAll('.score');
//     const counters = document.querySelectorAll('.questionCounter');
//     let mainTimer = document.getElementById('game-timer');
//     let lyrics;
    
//     const loadLyrics = async () => {
//       lyrics = new Lyrics();
      
//       // Try to fetch lyrics up to 3 times
//       for (let i = 0; i < 3; i++) {
//         try {
//           await lyrics.getNewLyrics();
//           break;
//         } catch (err) {
//           console.error('Failed to fetch lyrics', err);
          
//           // If it's the last try, rethrow the error
//           if (i === 2) {
//             throw err;
//           }
          
//           // Otherwise, wait a second before retrying
//           await new Promise(resolve => setTimeout(resolve, 1000));
//         }
//       }
  
//       // Continue with the rest of the setup...
//       mainTimer = new Timer(18, mainTimer);
//       const fifty_fifty = document.getElementById('fifty-fifty');
//       new FiftyFifty(fifty_fifty);
//       const second_chance = document.getElementById('second-chance');
//       new SecondChance(second_chance);
//       const button1 = document.getElementById('button1');
//       new Button1(button1, lyrics, mainTimer, state);
//       const button2 = document.getElementById('button2');
//       new Button2(button2, lyrics, mainTimer, state);
//       const button3 = document.getElementById('button3');
//       new Button3(button3, lyrics, mainTimer, state);
//       const button4 = document.getElementById('button4');
//       new Button4(button4, lyrics, mainTimer, state);
//     };
  
//     try {
//       await loadLyrics();
//     } catch (error) {
//       console.error('Failed to load lyrics after 3 attempts', error);
//       // Handle the error
//     }
//     scores.forEach(score=> {
//       score.textContent = state.points;
//     })
//     counters.forEach(counter => {
//       counter.textContent = state.points;
//     });
    
//     const playButton = document.getElementById('play-button');
//     new Playbutton(playButton);
    
//     playButton.addEventListener('click', async () => {
//       lyrics.getNewLyrics();
//       let readyTimer = new Timer(3, document.getElementById("ready-timer"));
//       const audioSource = document.getElementById('audio-source');

//       settingsMenu.style.display = 'none';
//       htpMenu.style.display = 'none';
      
//     readyTimer.start();
//     mainTimer.start();

//     //music loader for play button start
//     const audio = document.getElementById("myAudio");
//     audio.src = "audio/The Countdown Clock-[AudioTrimmer.com].mp3";
//     audio.loop = false;
//     audio.play();

    
//     counters.forEach(counter => {
//       counter.textContent = parseInt(counter.textContent) + 1;
//     });
//   });
  
//   // button.addEventListener('click', function() {
//     //   curtain.classList.toggle('open');
//     // });
//     const updateQuestionCounter = () => {
//       const counters = document.querySelectorAll('.questionCounter');
//       counters.forEach(counter => {
//         counter.textContent = parseInt(counter.textContent) + 1;
//       });
//     }



    
//     // const numQuestionsSelect = document.getElementById('number-of-questions');
//     // numQuestionsSelect.addEventListener('change', () => {
//     //   numQuestions.number = parseInt(numQuestionsSelect.value);
//     // });
//     const nextQuestion = document.getElementById('next-question');
//     new NextQuestionButton(nextQuestion);
    
//     nextQuestion.addEventListener("click", async () => {
//       const counter = document.querySelector(".questionCounter")
//       const numQuestionsInput = document.getElementById('number-of-questions');
//       const numQuestions = parseInt(numQuestionsInput.value);
    
//       if (counter.textContent < numQuestions) {
//         let readyTimer = document.getElementById('ready-timer');
//         readyTimer = new Timer(5, readyTimer)
//         const readyScreen = document.querySelector(".ready-screen");
//         const innerDiv3 = document.querySelector(".inner-div3");
//         const buttons = document.querySelectorAll(".choice");

//         counters.forEach(counter => {
//           counter.textContent = parseInt(counter.textContent) + 1;
//         });
        
//         const trackName = document.getElementById('track-name').textContent;
//         await lyrics.getNewLyrics(trackName);
//         mainTimer.time = 18;
//         readyTimer.time = 3
//         readyTimer.start();

//         buttons.forEach(button => {
//           button.setAttribute('data-answer', 'incorrect');
//           button.style.backgroundImage = 'linear-gradient(to top, rgb(200, 44, 62), rgb(216, 232, 77))';
//           button.disabled = false;
//         });
        
//         setTimeout(() => {
//           readyScreen.style.display = "block";
//           innerDiv3.style.display = "none";
//         }, 100);
//         mainTimer.start();

//         //music switcher for next question timer
//       const audio = document.getElementById("myAudio");
//       audio.src = "audio/The Countdown Clock-[AudioTrimmer.com].mp3";
//       audio.loop = false;
//       audio.play();

//     } else {
//       //end screen logic
//       mainTimer.time = 15;
//       const finalScore = document.querySelector(".final-score")
//       const score = state.points
//       finalScore.textContent = `${score} / ${counter.textContent}`
//       const innerDiv3 = document.querySelector(".inner-div3");
//       const innerDiv4 = document.querySelector(".inner-div4");
//       innerDiv3.style.display = "none";
//       innerDiv4.style.display = "block";

//       //should be audio player for on final screen
//       const audio = document.getElementById("myAudio");
//       audio.setAttribute("src", "audio/Game Show Winner - Music for content creator (mp3cut.net).mp3");
//       audio.load();
//       document.getElementById('myAudio').play();
//     }
//   });
  
//   const playAgainButton = document.getElementById('play-again');
//   playAgainButton.addEventListener('click', async () => {
//     const scores = document.querySelectorAll('.score');
//     const counters = document.querySelectorAll('.questionCounter');
//     const finalscore = document.querySelectorAll('.final-score');
//     const buttons = document.querySelectorAll(".choice");
  
//     buttons.forEach(button => {
//       button.setAttribute('data-answer', 'incorrect');
//       button.style.backgroundImage = 'linear-gradient(to top, rgb(200, 44, 62), rgb(216, 232, 77))';
//       button.disabled = false;
//     });
  
//     const audio = document.getElementById("myAudio");
//     audio.src = "audio/Game Show Tv Theme Music.mp3";
//     audio.loop = false;
  
//     audio.addEventListener('canplay', () => {
//       audio.play();
//     });
  
//     state.points = 0
//     scores.forEach(score => {
//       score.textContent = state.points;
//     });
//     counters.forEach(counter => {
//       counter.textContent = state.points;
//     });
//     finalscore.textContent = state.points;
  
//     const fiftyFifty = document.getElementById('fifty-fifty');
//     fiftyFifty.removeAttribute('disabled');
//     fiftyFifty.style.backgroundColor = '#d74a23';
//     fiftyFifty.setAttribute('available', 'true');
  
//     const secondChance = document.getElementById('second-chance');
//     secondChance.removeAttribute('disabled');
//     secondChance.style.backgroundColor = '#d74a23';
//     secondChance.setAttribute('available', 'true');
  
//     const innerDiv4 = document.querySelector('.inner-div4');
//     const innerDiv1 = document.querySelector('.inner-div1');
//     innerDiv4.style.display = 'none';
//     innerDiv1.style.display = 'flex';
  
//     // Remove event listener from second chance button
//     const clonedSecondChance = secondChance.cloneNode(true);
//     secondChance.parentNode.replaceChild(clonedSecondChance, secondChance);
  
//     // Create a new instance of the SecondChance class
//     const secondChanceButton = new SecondChance(clonedSecondChance);
  
//     await lyrics.getNewLyrics();
//   });
  
  
// })