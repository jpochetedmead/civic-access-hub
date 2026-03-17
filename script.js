/* DARK MODE */

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}

function applySavedTheme(){

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
document.body.classList.add("dark-mode");
}

}



/* SEARCH FILTER */

function filterResources(){

const input = document.getElementById("searchInput");

if(!input) return;

const filter = input.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

const text = card.textContent.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}



/* LANGUAGE TOGGLE */

function toggleLanguage(){

const langToggle = document.getElementById("langToggle");

if(!langToggle) return;

const lang = langToggle.value;

localStorage.setItem("lang",lang);

updateLanguage(lang);

}



function applyLanguage(){

const langToggle = document.getElementById("langToggle");

const savedLang = localStorage.getItem("lang") || "en";

if(langToggle){
langToggle.value = savedLang;
}

updateLanguage(savedLang);

}



/* UPDATE LANGUAGE */

function updateLanguage(lang){

document.querySelectorAll("[data-en]").forEach(el => {

const translation = el.getAttribute("data-" + lang);

if(!translation) return;

/* Handle input placeholders */

if(el.tagName === "INPUT"){
el.placeholder = translation;
return;
}

/* Only update text content of the element itself */

el.innerText = translation;

});

document.documentElement.lang = lang;

}



/* PAGE LOAD */

document.addEventListener("DOMContentLoaded", function(){

applySavedTheme();

applyLanguage();

});