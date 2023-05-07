class Playbutton {
    constructor(htmlElement) {
        this.htmlElement = htmlElement
        this.htmlElement.addEventListener('click', () => {
        const innerDiv2 = document.querySelector(".inner-div2");
        const innerDiv1 = document.querySelector(".inner-div1");
        innerDiv2.style.display = "block";
        innerDiv1.style.display = "none";
        })
    }
}

export default Playbutton;