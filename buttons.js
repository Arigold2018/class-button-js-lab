let popbutton = document.querySelector("#popbutton")
console.log(popbutton)
popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
    
 if(popbutton.classList.contains("pop")){
    popbutton.classList.remove("pop")
 }else{ 
    popbutton.classList.add("pop")
 }

    
})

let bigbutton = document.querySelector("#bigbutton")
console.log(bigbutton)
bigbutton.addEventListener("click",e => {
    console.log("The bigbutton worked YAYY")
    
if(bigbutton.classList.contains("big")){
    bigbutton.classList.remove("big")
}else{
    bigbutton.classList.add("big")

    
}
    
    
})

let fancybutton = document.querySelector("#fancybutton")
console.log(fancybutton)
fancybutton.addEventListener("click",e => {
    console.log("The fancybutton worked LETS GOO")
    
if(fancybutton.classList.contains("fancy")){
    fancybutton.classList.remove("fancy")
}else{
    fancybutton.classList.add("fancy")

    
}
    
    
})

let negativebutton = document.querySelector("#negativebutton")
console.log(negativebutton)
negativebutton.addEventListener("click",e => {
    console.log("you already know mr.berrios i am the best at smash")
    
if(negativebutton.classList.contains("negative")){
    negativebutton.classList.remove("negative")
}else{
    negativebutton.classList.add("negative")

    
}
    
    
})

let Friedchicken = document.querySelector("#Friedchicken")
console.log(Friedchicken)
Friedchicken.addEventListener("click",e => {
    console.log("finally")
    
if(Friedchicken.classList.contains("Friedchicken")){
    Friedchicken.classList.remove("Friedchicken")
}else{
 Friedchicken.classList.add("Friedchicken")

    
}
    
    
})