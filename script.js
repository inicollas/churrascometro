let a = document.getElementById("adults")
let k = document.getElementById("kids");
let h = document.getElementById("hours");
let m = document.getElementById("meat");
let b = document.getElementById("beer");
let s = document.getElementById("soda");
let p = document.getElementById("result");

function submit(){
  let getA = a.value;
  let getK = k.value / 2;
  let getH = h.value;
  let totalPeople = parseFloat(getA) + parseFloat(getK);
  let hours = parseFloat(getH);
  
  totalMeat = calcMeat(hours) * totalPeople;
  totalBeer = calcBeer(hours) * getA / 1000;
  totalSoda = calcSoda(hours) * totalPeople / 1000;

  m.innerHTML = (totalMeat + "g de carne") 
  b.innerHTML = (Math.round(totalBeer) + "L de cerveja") 
  s.innerHTML = (Math.round(totalSoda) + "L de refrigerante")
  p.style.display = ("inline");
}

let confirm = document.getElementById("submit").addEventListener("click", submit)

function calcMeat(hours){
  if(hours >= 6){
    return 700;
  }else{
    return 500;
  }
}

function calcBeer(hours){ 
  if(hours >= 6){
    return 2000;
  }else{
    return 1200;
  }
}

function calcSoda(hours){
  if(hours >= 6){
    return 1500;
  }else{
    return 1000;
  }
}
