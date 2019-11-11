/*3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.*/
let light = document.createElement("section")
light.style = "width: 100px; height:156px; border: 1px black solid;"
document.body.appendChild(light);
let button = document.createElement("button");
button.innerText = "click";
document.body.appendChild(button);
button.style = "margin-top: 20px";
let red = document.createElement("div");
let yelow = document.createElement("div");
let green = document.createElement("div");
red.style = "width: 50px; height:50px; border: 1px black solid; border-radius: 100%; margin: 0 auto;";
yelow.style = "width: 50px; height:50px; border: 1px black solid; border-radius: 100%; margin: 0 auto;";
green.style = "width: 50px; height:50px; border: 1px black solid; border-radius: 100%; margin: 0 auto;";
light.appendChild(red);
light.appendChild(yelow);
light.appendChild(green);
