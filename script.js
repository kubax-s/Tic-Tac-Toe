const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')
const a3 = document.querySelector('#a3')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')

const isWin = () => {
    if(a1.innerHTML && a1.innerHTML === a2.innerHTML && a2.innerHTML === a3.innerHTML) {
        alert('Wygrywa' + " " + a1.innerHTML)
        window.location.reload(true);
        
    }
    if(b1.innerHTML && b1.innerHTML === b2.innerHTML && b2.innerHTML === b3.innerHTML) {
        alert('Wygrywa' + " " + b1.innerHTML)
        window.location.reload(true);

    }
    if(c1.innerHTML && c1.innerHTML === c2.innerHTML && c2.innerHTML === c3.innerHTML) {
        alert('Wygrywa' + " " + c1.innerHTML)
        window.location.reload(true);

    }
    if(a1.innerHTML && a1.innerHTML === b1.innerHTML && b1.innerHTML === c1.innerHTML) {
        alert('Wygrywa' + " " + a1.innerHTML)
        window.location.reload(true);

    }
    if(a2.innerHTML && a2.innerHTML === b2.innerHTML && b2.innerHTML === c2.innerHTML) {
        alert('Wygrywa' + " " + a2.innerHTML)
        window.location.reload(true);

    }
    if(a3.innerHTML && a3.innerHTML === b3.innerHTML && b3.innerHTML === c3.innerHTML) {
        alert('Wygrywa' + " " + a3.innerHTML)
        window.location.reload(true);

    }
    if(a1.innerHTML && a1.innerHTML === b2.innerHTML && b2.innerHTML === c3.innerHTML) {
        alert('Wygrywa' + " " + a1.innerHTML)
        window.location.reload(true);

    }
    if(a3.innerHTML && a3.innerHTML === b2.innerHTML && b2.innerHTML === c1.innerHTML) {
        alert('Wygrywa' + " " + a3.innerHTML)
        window.location.reload(true);

    }
    return false
}

let counter = 0;

const clickFieldHandler = (e) => {
    if(!e.target.innerHTML) {
        counter++;
        if(counter % 2) {
            e.target.innerHTML = "X"
        }
        else {
            e.target.innerHTML = "O"
        }
    }
    if (!isWin() && counter === 9) {
        alert("REMIS")
        window.location.reload(true);
    }

}

a1.addEventListener ('click', clickFieldHandler)
a2.addEventListener ('click', clickFieldHandler)
a3.addEventListener ('click', clickFieldHandler)
b1.addEventListener ('click', clickFieldHandler)
b2.addEventListener ('click', clickFieldHandler)
b3.addEventListener ('click', clickFieldHandler)
c1.addEventListener ('click', clickFieldHandler)
c2.addEventListener ('click', clickFieldHandler)
c3.addEventListener ('click', clickFieldHandler)

$("#a1").on("click", function(){ 
    $("#a1").toggleClass("clicked");
})
$("#a2").on("click", function(){ 
    $("#a2").toggleClass("clicked");
})
$("#a3").on("click", function(){ 
    $("#a3").toggleClass("clicked");
})
$("#b1").on("click", function(){ 
    $("#b1").toggleClass("clicked");
})
$("#b2").on("click", function(){ 
    $("#b2").toggleClass("clicked");
})
$("#b3").on("click", function(){ 
    $("#b3").toggleClass("clicked");
})
$("#c1").on("click", function(){ 
    $("#c1").toggleClass("clicked");
})
$("#c2").on("click", function(){ 
    $("#c2").toggleClass("clicked");
})
$("#c3").on("click", function(){ 
    $("#c3").toggleClass("clicked");
})