const button = document.querySelector('#changeColor')
const div = document.querySelector("#container")

function makeRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function (e) {
    div.style.backgroundColor = makeRandomColor();
    e.stopPropagation();
})

div.addEventListener('click', function () {
    div.classList.toggle("hide")
})