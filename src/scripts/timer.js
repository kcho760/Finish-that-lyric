class Timer {
  constructor(time) {
    this.initialTime = time;
    this.time = time;
    this.intervalId = null;
    setTimeout(() => this.printTime(), 0);
  }
  

  printTime() {
    const seconds = this.time;
    const timer = document.getElementById("timer");
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
        this.stop();
        const timer = document.getElementById("timer");
        timer.innerHTML = "Time up!";
        document.querySelector("#answer-result").innerHTML = "Time Out!";
        setTimeout(() => {
          const innerDiv2 = document.querySelector(".inner-div2");
          const innerDiv3 = document.querySelector(".inner-div3");
          innerDiv2.style.display = "none";
          innerDiv3.style.display = "block";
        }, 500);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

export default Timer;
