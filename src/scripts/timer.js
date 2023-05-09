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
  }

  start() {
    // clear the old timer if it exists
    this.stop();

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
          setTimeout(() => {
            const innerDiv2 = document.querySelector(".inner-div2");
            const innerDiv3 = document.querySelector(".inner-div3");
            innerDiv2.style.display = "none";
            innerDiv3.style.display = "block";
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
