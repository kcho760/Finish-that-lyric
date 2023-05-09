class Playbutton {
    constructor(htmlElement) {
        this.htmlElement = htmlElement
        this.htmlElement.addEventListener('click', () => {
            const readyScreen = document.querySelector(".ready-screen");
            const innerDiv1 = document.querySelector(".inner-div1");
            readyScreen.style.display = "block";
            innerDiv1.style.display = "none";
        })
    }
}

export default Playbutton;