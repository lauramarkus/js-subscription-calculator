// Your JS code here
const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
const result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e){
    subType = e.target.value;
    console.log(subType);
});
