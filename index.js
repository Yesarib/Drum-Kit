var buttons = document.querySelectorAll(".drum");
for (var i=0; i<buttons.length; i++){
    
    buttons[i].addEventListener("click",handleClick)
    sound(buttons);
}
function handleClick() {
    var btn = this.innerHTML;
    switch (btn) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

            case "a":
                var tom1 = new Audio("sounds/tom-2.mp3")
                tom1.play();
            break;

            case "s":
                var tom2 = new Audio("sounds/tom-3.mp3")
                tom2.play();
            break;
            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
            break;
            case "j":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
            break;
            case "k":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
            break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
            break;
    
        default:
            break;
    }
}

document.addEventListener("keypress",function(event){
    sound(event.key)
})

function sound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

            case "a":
                var tom1 = new Audio("sounds/tom-2.mp3")
                tom1.play();
            break;

            case "s":
                var tom2 = new Audio("sounds/tom-3.mp3")
                tom2.play();
            break;
            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
            break;
            case "j":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
            break;
            case "k":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
            break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
            break;
    
        default:
            break;
    }
}