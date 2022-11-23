var allowAge = document.getElementById("allowAge");
var disallowAge = document.getElementById("disallowAge");
var popupAgeContainer = document.getElementById("popupAgeContainer");
var errorAgeShow = document.getElementById("errorAgeShow");


if(!localStorage.getItem("allow")) {
localStorage.setItem('allow', false);
}

var allowValue = localStorage.getItem('allow');

console.log(allowValue);
if (allowValue === "false") {
    popupAgeContainer.classList.remove("hideme");
    

}   

allowAge.onclick = function() {
    localStorage.setItem('allow', true);
    popupAgeContainer.classList.add("hideme");
};

disallowAge.onclick = function() {
    errorAgeShow.classList.remove("disabled");
};

