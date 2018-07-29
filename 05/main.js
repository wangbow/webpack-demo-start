import "./app.css";

document.querySelector("body").innerHTML = "hello,world";

const img = document.createElement("img");
img.src = require("./imgs/img-big.png");
const img2 = document.createElement("img");
img2.src = require("./imgs/bg-big.png");
document.body.appendChild(img);
document.body.appendChild(img2);