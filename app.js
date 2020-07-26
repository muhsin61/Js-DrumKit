
soundsKey ={
    65:"boom",
    83:"clap",
    68:"hihat",
    70:"kick",
    71:"openhat",
    72:"ride",
    74:"snare",
    75:"tink",
    76:"tom"}

document.addEventListener('keydown',(e) => {
    console.log(e.keyCode)
    
    new Audio("./sounds/" + soundsKey[e.keyCode] + ".wav").play();
})


function soundStart(e){
    console.log(e.target)
    console.log(e.target.className)
    new Audio("./sounds/" + e.target.className + ".wav").play();
}

