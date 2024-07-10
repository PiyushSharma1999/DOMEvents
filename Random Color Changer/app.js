function generateRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`;
}

const h1 = document.querySelector("h1")
const btn = document.querySelector("button")


btn.addEventListener('click', function () {

    h1.innerText = generateRGB();
})

btn.addEventListener('click', function () {


    document.body.style.backgroundColor = generateRGB();
}
)