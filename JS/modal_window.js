/*2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
 Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.*/

 let button = document.createElement("button");
 button.innerText = "Открыть";
 document.body.appendChild(button);

 button.setAttribute("onClick", "confirm(`бла бла бла`)");
 
 

