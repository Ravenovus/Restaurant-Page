import "./styles.css";
import { LoadHomePage } from "./home.js";

const content = document.querySelector("#content");

content.appendChild(LoadHomePage());
console.log("testing injection");
