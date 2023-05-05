class Playbutton {
    constructor(htmlElement) {
        this.htmlElement = htmlElement
        this.htmlElement.addEventListener('click', () => {
            const parent = this.htmlElement.parentNode
            parent.classList.add('move-left');
            setTimeout(() => {
                parent.classList.remove('move-left');
                parent.style.display = 'none';
            }, 0)
        })
    }
}

export default Playbutton;