const clrArr = ["red", "green", "gray", "purple", "brown", "pink", "violet", "black"]

const shpArr = ["circle", "square", "triangle"]

let button = document.querySelector("#chng-color");
let shape = document.querySelector(".shape");
let chngBtn = document.querySelector("#chng-btn")


button.addEventListener("click", function () {
    const random = Math.floor(Math.random() * clrArr.length)
    document.querySelector(".background").style.backgroundColor = clrArr[random];
})


chngBtn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * shpArr.length);
    shape.id = shpArr[random]
    shape.style.background = clrArr[random]
})