
/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function() {

    var listElements = document.querySelectorAll("img");
    var body = document.querySelector("body");
    console.log(listElements);
    console.log(body);



    listElements.forEach(function (img){
        img.addEventListener("click", function() {
            var src = this.getAttribute("src");
            var div = document.createElement("div");
            var img = document.createElement("img");
            var button = document.createElement("button");

            body.appendChild(div);
            div.appendChild(img);
            div.appendChild(button);
            button.innerText = ("zamknij");


            img.setAttribute("src", src);
            div.classList.add("fullScreen");
            button.classList.add("close");


            button.addEventListener("click", function(){
                div.parentElement.removeChild(div);
            });
        });
    });
});