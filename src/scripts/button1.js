class Button1 {
  constructor(htmlElement, lyrics, timer) {
    this.htmlElement = htmlElement;
    this.lyrics = lyrics;
    this.scores = document.querySelectorAll(".score")
    this.timer = timer
    this.handleClick();
  }
  handleClick() {
    this.htmlElement.addEventListener("click", () => {
      const isCorrect = this.htmlElement.getAttribute("data-answer") === "correct";
      const innerDiv2 = document.querySelector(".inner-div2");
      const innerDiv3 = document.querySelector(".inner-div3");
      if (isCorrect) {
        document.querySelector("#answer-result").innerHTML = "Correct!";
        this.scores.forEach(score=> {
          score.textContent = Number(score.textContent) + 1
        })
      } else {
        document.querySelector("#answer-result").innerHTML = "Incorrect";
      }
      innerDiv2.style.display = "none";
      innerDiv3.style.display = "block";
      this.timer.stop();
      
    });
  }
}
export default Button1;
