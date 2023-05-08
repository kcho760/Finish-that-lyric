class FiftyFifty {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        this.available = true;
        this.handleClick();
    }

    handleClick() {
        this.htmlElement.addEventListener('click', () => {
            if (this.available === true) {
                this.htmlElement.style.backgroundColor = 'grey';
                this.available = false;
                this.htmlElement.disabled = true;
                const buttons = document.querySelectorAll(".choice");
                let incorrectButtonsFound = 0
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons[i].getAttribute('data-answer')==="incorrect") {
                        buttons[i].style.backgroundColor = 'grey';
                        buttons[i].disabled = true;
                        incorrectButtonsFound++;
                        if (incorrectButtonsFound === 2) {
                            break;
                        }
                    }
                }
            }
        });
    }
}

export default FiftyFifty