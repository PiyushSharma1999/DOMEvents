const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const ul = document.querySelector("#cats")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newCat = input.value
    const newli = document.createElement("li")
    newli.innerText = newCat
    ul.append(newli)
    input.value = ""
    console.log("SUBMITTED THE FORM!");
})

ul.addEventListener('click', function (e) {
    e.target.nodeName === 'li' && e.target.remove();
})
