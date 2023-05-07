class Button1 {
  constructor(htmlElement, lyrics) {
    this.htmlElement = htmlElement;
    this.lyrics = lyrics;
    this.htmlElement.addEventListener("click", () => {
      const isCorrect = this.htmlElement.getAttribute("data-answer") === "correct";
      const innerDiv2 = document.querySelector(".inner-div2");
      const innerDiv3 = document.querySelector(".inner-div3");
      if (isCorrect) {
        document.querySelector("#answer-result").innerHTML = "Correct!"
      } else {
        document.querySelector("#answer-result").innerHTML = "Incorrect"
      }
      innerDiv2.style.display = "none";
      innerDiv3.style.display = "block";
    });
  }
}
export default Button1;