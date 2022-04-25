//przypisanie elementow
const cupcakeElement = document.getElementById('cupcake');
const timeElement = document.getElementById('time');
//dodanie mozliwosci klikniecia aby wplynac na ruch
cupcakeElement.addEventListener('click', rotate);

let canRotate = false;
let intervalSpeed = 15;
let degree = 0;
let spin = 0;
//funkcja badajaca klikniecia
function rotate() {
    canRotate = !canRotate;
    console.log(canRotate);
}

let myInterval = setInterval(cupcakeSpin, intervalSpeed);
//funkcja odpowiedzialna za obrot
function cupcakeSpin (){
    if(canRotate){
        degree += 10;
        if(degree > 350){
            degree = 0;
            spin ++;
            spinElement.innerHTML = spin;
        }
        cupcakeElement.style.transform = 'rotate(' + degree + 'deg)';
    }
}
//funkcja odpowiedzialna za wyswietlanie czasu
function time(){
    const date = new Date();
    timeElement.innerHTML = date.toLocaleTimeString();
}
setTimeout(time, 100)
window.onload = load;