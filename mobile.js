function thefunc() { 
if (screen.width <= 699) {
document.location = "mobile-version.html";
document.getElementById("tester").innerHTML="you are mobile (meaning you shouldnt be here)"
}
if (screen.width >= 700) {
document.getElementById("tester").innerHTML="you are on pc (yay!!!!!!)";}
 console.log = "hamburger"
}