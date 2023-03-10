for (var i = 0; i < document.querySelectorAll(".bark").length; i++) {
document.querySelectorAll(".bark")[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
        case 'w':
            var chi = new Audio("sounds/chi.m4a");
            chi.play();
            break;

        case "a":
            var husky = new Audio("sounds/husky.m4a");
            husky.play();
            break;

        case 's':
            var shih = new Audio("sounds/shih.m4a");
            shih.play();
        break;

        case 'd':
            var pitbull = new Audio("sounds/pitbull.m4a");
            pitbull.play();
        break;

        case 'j':
            var lab = new Audio("sounds/lab.m4a");
            lab.play();
        break;

        case 'k':
            var weenie = new Audio("sounds/weenie.m4a");
            weenie.play();
        break;

        case 'l':
            var toy = new Audio("sounds/toy.m4a");
            toy.play();
        break;

        default: console.log();
    }
    
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100);

}
