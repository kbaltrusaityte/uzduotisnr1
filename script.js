

while(prekesKainaSu <= 0 || isNaN(prekesKainaSu)) {
    prekesKainaSu = Number(prekesKainaSu)
    var prekesKainaSu = prompt("Kokia šios prekės kaina?")
    console.log("Prekės kaina su PVM: " + prekesKainaSu + "€")
}

var multiply = 0.21 * prekesKainaSu
console.log("PVM: " + multiply.toFixed(2) + "€")

var prekesKainaBe = prekesKainaSu - multiply
console.log("Prekės kaina be PVM: " + prekesKainaBe.toFixed(2) + "€")





