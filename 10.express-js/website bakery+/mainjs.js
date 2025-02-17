const element1 = document.getElementById("f1");
element1.onmouseover = mousein;

const element2 = document.getElementById("f2");
element2.onmouseover = mousein;

const element3 = document.getElementById("f3");
element3.onmouseover = mousein(element3);

function mousein(element){
    element.style.backgroundColor = "linear-gradient(to bottom, #F8FFAE 0%, #43C6AC 100%);";

}

