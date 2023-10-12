function wysylanieKoniokrada() {
    return "images/koniokrad" + Math.floor(Math.random() * 5) + ".png";
}

document.getElementById("img").src = wysylanieKoniokrada();

document.getElementById("btn").onclick = function(){
    document.getElementById("img").src = wysylanieKoniokrada();
}