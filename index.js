//menu

const menu = document.querySelector("#menu").addEventListener("click", () => {
    const areainputs = document.querySelector("#add")
    if (areainputs.style.display != "block") {
        areainputs.style.display = "block"
    } else {
        areainputs.style.display = "none"
    }
})



//input funcionar

const input = document.querySelector("#start")
const result = document.querySelector("#sla")

input.addEventListener("change", () => {
    const inputvalue = document.querySelector("#start").value

    if (inputvalue == 100) {
        result.style.display = "flex"
        input.style.display = "none"
    } else {
        result.style.display = "none"
    }
    console.log(inputvalue)

})


const oculto = document.querySelector("#ocultar").addEventListener("click", () => {
    result.style.display = "none"
    input.style.display = "block"
    input.value = 0
})






function aleatorio(b, a) {

    return Math.floor(Math.random() * (b - a + 1)) + a
}



