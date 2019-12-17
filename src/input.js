export default class InputHandler {
constructor() {
    document.addEventListener('keydown', (event) => {
        alert(event.keyCode)
    })
}

}