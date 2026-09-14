function updateClock() {
    const clockworkpls = new Date();
    document.getElementById("time").innerHTML = clockworkpls.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

function darkmodehome() {
    var element = document.body;
    element.classList.toggle("darkmodehome");
    var iconmatch = document.querySelector("button img");
    var house = document.querySelector(".homeimg");
     if (element.classList.contains("darkmodehome")) {
        iconmatch.src = "images/lightmode.png";
        for (var i = 0; i < house.length; i++) {
            house[i].src = "images/housedark.png";
        }
    } else {
        iconmatch.src = "images/darkmode.png";
        for (var i = 0; i < house.length; i++) {
            house[i].src = "images/house.png";
        }
    }
}

function darkmodeabout(){
    var element = document.body;
    element.classList.toggle("darkmodeabout");
    var iconmatch = document.querySelector("button img");
    if (element.classList.contains("darkmodeabout")) {
        iconmatch.src = "images/lightmode.png";
    } else {
        iconmatch.src = "images/darkmode.png";
    }
}

function darkmodejournal(){
    var element = document.body;
    element.classList.toggle("darkmodejournal");
    var iconmatch = document.querySelector("button img");
    if (element.classList.contains("darkmodejournal")) {
        iconmatch.src = "images/lightmode.png";
    } else {
        iconmatch.src = "images/darkmode.png";
    }
}

function darkmodeai() {
    var element = document.body;
    element.classList.toggle("darkmodeai");
    var iconmatch = document.querySelector("button img");
    var roboicon = document.getElementsByClassName("roboicon");
    if (element.classList.contains("darkmodeai")) {
        iconmatch.src = "images/lightmode.png";
        for (var i = 0; i < roboicon.length; i++) {
            roboicon[i].src = "images/darkmoderobo.png";
        }
    } else {
        iconmatch.src = "images/darkmode.png";
        for (var i = 0; i < roboicon.length; i++) {
            roboicon[i].src = "images/robobg.png";
        }
    }
}

function darkmodeprojects() {
    var element = document.body;
    element.classList.toggle("darkmodeprojects");
    var iconmatch = document.querySelector("button img");
    var projicon = document.getElementsByClassName("titleimg");
    if (element.classList.contains("darkmodeprojects")) {
        iconmatch.src = "images/lightmode.png";
        for (var i = 0; i < projicon.length; i++) {
            projicon[i].src = "images/projectsdark.png";
        }
    } else {
        iconmatch.src = "images/darkmode.png";
        for (var i = 0; i < projicon.length; i++) {
            projicon[i].src = "images/projects.png";
        }
    }
}

function darkmodeskills() {
    var element = document.body;
    element.classList.toggle("darkmodeskills");
    var iconmatch = document.querySelector("button img");
    if (element.classList.contains("darkmodeskills")) {
        iconmatch.src = "images/lightmode.png";
    } else {
        iconmatch.src = "images/darkmode.png";
    }
}
function navChecker() {
    var counter = 0;
    if (document.getElementById("sidebar").style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
}

function openNav(){
    var counter = 0;
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function more(button){
    const card = button.parentElement;
    const text = card.querySelector(".readmore");
        text.classList.toggle("show");
}

function filter(type){
    const cards = document.querySelectorAll(".projectcard");
    cards.forEach(function(card){
        if (type === "all" || card.classList.contains(type)){
            card.style.display = "flex";
        }else{
            card.style.display = "none";
        }
    });
}