class Timer {
  constructor(time) {
    this.time = time;
    this.intervalId = null;
    setTimeout(() => this.printTime(), 0);
    this.intervalId = setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    const seconds = this.time;
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
  }

  _tick() {
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
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

export default Timer;
