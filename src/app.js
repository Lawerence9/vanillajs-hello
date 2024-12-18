import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ["the", "our"];
let adjective = ["great", "big"];
let noun = ["jogger", "racoon"];

let domainType = ".com";
let domain = "";
for (let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adjective.length; x++) {
    for (let y = 0; y < noun.length; y++) {
      domain += `
        <li class="list-group-item">
          ${pronoun[i]}${adjective[x]}${noun[y]}${domainType}
        </li>
      `;
    }
  }
}

document.querySelector("#webs").innerHTML = domain;