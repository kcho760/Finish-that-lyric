class Button4 {
    constructor(htmlElement) {
        this.htmlElement = htmlElement
        this.htmlElement.addEventListener('click', () => {
            const innerDiv2 = document.querySelector('.inner-div2')
            innerDiv2.classList.add('move-left');
            setTimeout(() => {
                innerDiv2.classList.remove('move-left');
                innerDiv2.style.display = 'none';
            }, 0)
        })
    }
}

export default Button4;