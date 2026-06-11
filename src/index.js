import "./styles.css";
import { LoadHomePage } from "./home.js";
import { LoadMenu } from "./menu.js";

const content = document.querySelector("#content");

//content.appendChild(LoadHomePage());
content.appendChild(LoadMenu());
console.log("testing injection");
