class FiftyFifty {
    constructor(htmlElement) {
        this.htmlElement =  htmlElement;
        this.available = true;
        this.htmlElement.addEventListener('click', () => {
            if (this.available === true) {
                this.htmlElement.style.backgroundColor ='grey';
                this.available = false;
            }
        })
    }
}

export default FiftyFifty