
document.addEventListener("DOMContentLoaded", function(){

    var menu = document.querySelector("div");
    //console.log(menu);
    menu.classList.add("nav");
    var mainList = document.querySelectorAll("div > ul > li");
    //console.log(mainList);


    mainList.forEach(function(main){


        main.addEventListener("mouseover", function(){
            //console.log("najechalem");

            var extraMenu = this.querySelector("ul");

            if (extraMenu !== null) {
                extraMenu.style.display = "block";
            }
        });


        main.addEventListener("mouseout", function(){
            //console.log("zjechalem");

            var extraMenu = this.querySelector("ul");

            if (extraMenu !== null) {
                extraMenu.style.display = "none";
            }
        });
    });
});