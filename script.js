function wysylanieKoniokrada() {
    let kon;
    let losowanie_konia = Math.floor(Math.random() * 5);
    if (losowanie_konia == 0) {
        kon = "images/koniokrad.png";
    }
    else if (losowanie_konia == 1) {
        kon = "images/koniokrad4.png";
    }
    else if (losowanie_konia == 2) {
        kon = "images/koniokrad3.png";
    }
    else if (losowanie_konia == 3) {
        kon = "images/koniokrad5.png";
    }
    else if (losowanie_konia == 4) {
        kon = "images/koniokrad6.png";
    }
    return kon;
}

document.getElementById("img").src = wysylanieKoniokrada();

document.getElementById("btn").onclick = function(){
    document.getElementById("img").src = wysylanieKoniokrada();
}