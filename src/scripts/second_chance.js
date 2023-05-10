class SecondChance {
    constructor(htmlElement) {
      this.htmlElement = htmlElement;
      this.available = true;
      this.handleClick();
    }
  
    handleClick() {
      this.htmlElement.addEventListener('click', () => {
        if (this.available === true) {
          this.htmlElement.style.backgroundColor = 'grey';
          this.htmlElement.setAttribute('chance', true);
          this.htmlElement.disabled = true;
          this.available = false;
        }
      });
    }
  }
  
  export default SecondChance;
  