let btns = document.querySelectorAll('.wrap-toggle');

let wraps = document.querySelectorAll('.wrap');


for (let x = 0; x < btns.length; x++) {         // x står för alla 3 knapparna. Istället för att skriva alla sepparat.. [0] (HTML) [1] (CSS) osv .. vilket man också skulle kunna göra:)
    btns[x].addEventListener('click', function () {
        wraps[x].classList.toggle('active')             //.toggle är inbyggd function. Om det inte finns en active class så kommer den skapa en när man klickar. När den skapas så finns en CSS kod för active klass som triggas och visar HTML block text
    })                                                  // .toggle är samma som att skriva classList.add eller classList.remove. .toggle innehåller båda funktionerna.
}