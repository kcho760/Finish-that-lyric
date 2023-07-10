class SecondChance {
  constructor(htmlElement) {
    this.htmlElement = htmlElement;
    this.available = true;
    this.handleClick();
    this.chance = false;
  }

  handleClick() {
    this.htmlElement.addEventListener("click", () => {
      if (this.available) {
        this.htmlElement.style.backgroundColor = "grey";
        this.htmlElement.disabled = true;
        this.available = false;
        this.htmlElement.setAttribute("chance", "true");
      }
    });
  }
}

export default SecondChance;