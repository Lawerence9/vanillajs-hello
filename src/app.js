/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon"];

let domain = "";

function domainName(str) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        domain += pronoun[i] + adj[x] + noun[y] + ".com\n";
      }
    }
  }
  return domain;
}

window.onload = function() {
  //write your code here
  console.log(domainName(domain));
};
