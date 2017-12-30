
document.addEventListener("DOMContentLoaded", function () {

    var toolTips = document.querySelectorAll(".tooltip");
    var newTip = document.createElement("span");


    toolTips.forEach(function(over){

        over.addEventListener("mouseover", function() {
            var toolTipText = this.dataset.text;

            this.appendChild(newTip);
            this.firstElementChild.classList.add("tooltipText");
            this.firstElementChild.innerText = toolTipText;
        });

        over.addEventListener("mouseout", function() {
            newTip.parentElement.removeChild(newTip);

        });
    });
});

/*
 <span class="tooltipText">Text tooltipa</span>
 */