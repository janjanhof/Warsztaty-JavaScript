document.addEventListener("DOMContentLoaded", function() {

    var prev = document.querySelector("#prevPicture");
    var next = document.querySelector("#nextPicture");
    var listEl = document.querySelectorAll("li");
    var listElIndex = 0;

    listEl[listElIndex].classList.add("visible"); // dodano klasę visible do listEl od 0 czyli pierwszego elementu

    prev.addEventListener("click", function(){

        listEl[listElIndex].classList.remove("visible");
        listElIndex += -1;
        if (listElIndex < 0) {
            listElIndex = listEl.length - 1;
        }
        listEl[listElIndex].classList.add("visible");
    });

    next.addEventListener("click", function(){
        console.log("kliknięto następny");
        listEl[listElIndex].classList.remove("visible");
        listElIndex += 1;
        if (listElIndex > listEl.length - 1) {
            listElIndex = 0;
        }
        listEl[listElIndex].classList.add("visible");
        //problem: po wywolaniu wszystkich obrazków - obrazki znikają ze strony

    });




});



/*
W poprzednim punkcie powinieneś zauważyć, że po
 wielokrotnym naciśnięciu guzika do przodu (albo do tyłu)
  obrazki znikają ze strony. Dzieje się tak dlatego, że
   zmienna określająca numer widocznego obrazka przyjmuje
    niepoprawną wartość (mniejszą od zera lub większą niż
     liczba elementów w naszej tablicy). Jak temu zaradzić?
      W eventach dodaj if-a, który sprawdzi, czy wartość nie
       wyszła poza zakres. Jeżeli tak się stało, to program ma
       nastawić poprawną wartość:

liczbą jest ujemna -> 0,
liczba równa się liczbie elementów lub jest większa -> -1.

*/