class Button3 {
  constructor(htmlElement, lyrics, timer, state) {
    this.htmlElement = htmlElement;
    this.lyrics = lyrics;
    this.scores = document.querySelectorAll(".score")
    this.timer = timer
    this.state = state
    this.handleClick();
  }
  handleClick() {
    this.htmlElement.addEventListener("click", () => {
      const isCorrect = this.htmlElement.getAttribute("data-answer") === "correct";
      const innerDiv2 = document.querySelector(".inner-div2");
      const innerDiv3 = document.querySelector(".inner-div3");
      const audioElement = document.querySelector("#myAudio");
  
      if (isCorrect) {
        document.querySelector("#answer-result").innerHTML = "Correct!";
        this.state.points++;
        this.scores.forEach(score => {
          score.textContent = this.state.points;
        });

        audioElement.src = "audio/Correct Answer Sound Effect - NO COPYRIGHT 🎤🎶.mp3";
        audioElement.loop = false;
        audioElement.play();
        this.timer.stop();
        innerDiv2.style.display = "none";
        innerDiv3.style.display = "block";
      } else {
        // add second chance logic
        let secondChance = document.getElementById("second-chance")
        if (secondChance.getAttribute("chance") === "true") {
          this.timer += 10;
          secondChance.setAttribute('chance', false);
          this.htmlElement.disabled = true;
          this.htmlElement.style.backgroundImage = "none";
          this.htmlElement.style.backgroundColor = "grey";
        } else {
          document.querySelector("#answer-result").innerHTML = "Incorrect";
          audioElement.src = "audio/Incorrect sound effect.mp3";
          audioElement.loop = false;
          audioElement.play();
  
          innerDiv2.style.display = "none";
          innerDiv3.style.display = "block";
          this.timer.stop();
        }
      }
    });
  }
  
}

export default Button3;
