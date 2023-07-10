class Button4 {
  constructor(htmlElement, lyrics, timer, state, secondChance) {
    this.htmlElement = htmlElement;
    this.lyrics = lyrics;
    this.scores = document.querySelectorAll(".score");
    this.timer = timer;
    this.state = state;
    this.secondChance = secondChance;
    this.correctAnswerChosen = false;
    this.incorrectAnswerChosen = false; // New flag to track if an incorrect answer has been chosen
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
        const secondChanceButton = document.getElementById("second-chance");
        secondChanceButton.setAttribute("chance", "false");
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
        this.correctAnswerChosen = true;
        this.incorrectAnswerChosen = false; // Reset the flag when correct answer is chosen
      } else {
        if (this.secondChance && !this.correctAnswerChosen && !this.incorrectAnswerChosen) {
          document.querySelector("#answer-result").innerHTML = "Incorrect";
          audioElement.src = "audio/Incorrect sound effect.mp3";
          audioElement.loop = false;
          audioElement.play();

          innerDiv2.style.display = "none";
          innerDiv3.style.display = "block";
          this.timer.stop();
          this.incorrectAnswerChosen = true; // Set the flag to true when an incorrect answer is chosen
        } else {
          const secondChanceButton = document.getElementById("second-chance");
          let chance = secondChanceButton.getAttribute("chance") === "true";
          console.log(chance)
          if (chance) {
            this.htmlElement.disabled = true;
            this.htmlElement.style.backgroundImage = "none";
            this.htmlElement.style.backgroundColor = "grey";
            secondChanceButton.setAttribute("chance", "false");
            console.log(secondChanceButton.getAttribute("chance"))
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
      }
    });
  }
}

export default Button4;
