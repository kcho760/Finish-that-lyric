class Timer {
  constructor(time, htmlelement) {
    this.htmlelement = htmlelement;
    this.initialTime = time;
    this.time = time;
    this.intervalId = null;
    setTimeout(() => this.printTime(), 0);
  }
  

  printTime() {
    const seconds = this.time;
    const timer = this.htmlelement;
    timer.innerHTML = seconds;
    if (this.time > 5) {
      this.htmlelement.style.color = "green";
    } else {
      this.htmlelement.style.color = "red";
    }
  }

  restart() {
    this.stop(); // Stop the current timer
    this.time = this.initialTime; // Reset the time
    this.start(); // Start the timer
  }

  start() {
    // clear the old timer if it exists
    this.stop();
    this.htmlelement.style.color = "green";
    // create a new timer
    this.intervalId = setInterval(() => {
      this.time--;
      this.printTime();
      if (this.time === 0) {
        if (this.htmlelement === document.getElementById("ready-timer")) {
          this.stop()
          const readyScreen = document.querySelector(".ready-screen");
          const innerDiv2 = document.querySelector(".inner-div2");
          readyScreen.style.display = "none";
          innerDiv2.style.display = "block";
        }else{
          this.stop();
          const timer = this.htmlelement;
          timer.innerHTML = "Time up!";
          document.querySelector("#answer-result").innerHTML = "Time Out!";
          this.htmlelement.style.color = "green"
          setTimeout(() => {
            const innerDiv2 = document.querySelector(".inner-div2");
            const innerDiv3 = document.querySelector(".inner-div3");
            innerDiv2.style.display = "none";
            innerDiv3.style.display = "block";
            document.getElementById('myAudio').setAttribute('src', 'audio/Incorrect sound effect.mp3');
            document.getElementById('myAudio').load();
            const audioElement = document.getElementById('myAudio');
            audioElement.loop = false;
          }, 500);
        }
      }

    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

export default Timer;
