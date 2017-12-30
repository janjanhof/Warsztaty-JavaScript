document.addEventListener("DOMContentLoaded", function(){

    var imgs = document.querySelectorAll("img");
    console.log(imgs);
    var hideBtn = document.querySelector("#hideButton");
    console.log(hideBtn);
    var showBtn = document.querySelector("#showButton");
    console.log(showBtn);
    var tagInput = document.querySelector("#tagInput");
    console.log(tagInput);


    hideBtn.addEventListener("click", function(){

        var inputText = tagInput.value;
        //console.log(inputText);
        tagInput.value = "";

        imgs.forEach(function (img){
            var data = img.dataset.tag;
            //console.log(data);

            if (data.indexOf(inputText) >= 0) {
                img.classList.add('invisible');
            }

        });
    });


    showBtn.addEventListener("click", function(){

        var inputText = tagInput.value;
        //console.log(inputText);
        tagInput.value = "";


        imgs.forEach(function (img){
            var data = img.dataset.tag;
            //console.log(data);

            if (data.indexOf(inputText) >= 0) {
                img.classList.remove('invisible');
            }
        });
    });
});
