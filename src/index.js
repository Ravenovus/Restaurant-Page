import "./styles.css";
import { LoadHomePage } from "./home.js";
import { LoadMenu } from "./menu.js";
import { LoadContact } from "./contact.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

content.appendChild(LoadHomePage());

function ClearContent(){
    while (content.firstChild){
        content.removeChild(content.lastChild);
    }
}

function ButtonLoadHome(){
    ClearContent();
    content.appendChild(LoadHomePage());
}

function ButtonLoadMenu(){
    ClearContent();
    content.appendChild(LoadMenu());
}

function ButtonLoadContact(){
    ClearContent();
    content.appendChild(LoadContact());
}

homeButton.addEventListener("click", function(){
    ButtonLoadHome();
});

menuButton.addEventListener("click", function(){
    ButtonLoadMenu();
});

contactButton.addEventListener("click", function(){
    ButtonLoadContact();
});

