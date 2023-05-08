class SecondChance {
    constructor(htmlElement) {
        this.htmlElement =  htmlElement;
        this.available = true;
        this.htmlElement.addEventListener('click', () => {
            if (this.available === true) {
                this.htmlElement.style.backgroundColor ='grey';
                this.available = false;
                this.htmlElement.chance = true;
                this.htmlElement.disabled = true;
            }
        })
    }
}

export default SecondChance