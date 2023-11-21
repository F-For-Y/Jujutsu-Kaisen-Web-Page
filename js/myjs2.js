let ablum1 = document.getElementById("season1");
let ablum2= document.getElementById("season11");
let ablum3 = document.getElementById("film");
let ablum4 = document.getElementById("season2");

function nav_album1(){
    ablum1.style.display = "flex";
    ablum2.style.display = "none";
    ablum3.style.display = "none";
    ablum4.style.display = "none";
}

function nav_album2() {    
    ablum2.style.display = "flex";
    ablum1.style.display = "none";
    ablum3.style.display = "none";
    ablum4.style.display = "none";
}

function nav_album3() {
    ablum3.style.display = "flex";
    ablum1.style.display = "none";
    ablum2.style.display = "none";
    ablum4.style.display = "none";
}

function nav_album4() {
    ablum4.style.display = "flex";
    ablum1.style.display = "none";
    ablum2.style.display = "none";
    ablum3.style.display = "none";
}