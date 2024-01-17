document.querySelector("button").addEventListener("click",() =>{
    document.querySelector("body").classList.toggle("dark")
    document.querySelector("button").classList.toggle("dark")
    document.querySelector(".sun").classList.toggle("dark")
    document.querySelector(".moon").classList.toggle("dark")
    document.querySelector(".sun-moon").classList.toggle("dark")
    document.querySelector("button > img").classList.toggle("dark")
})