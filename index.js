var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);

document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

// document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
// document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Shibe1 wow!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Shibe2 wow!🚩";
} else {
  document.querySelector("h1").innerHTML="Draw!";
}
