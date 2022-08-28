function verifClass() {

    let la = document.querySelector('#la').value;
    let lb = document.querySelector('#lb').value;
    let lc = document.querySelector('#lc').value;


    if ((la == lb) && (lb == lc)) {
        window.alert("equilatero");
    }
    else if (la == lb || lb == lc || la == lc) {
        window.alert("isosceles");
    } else {
        window.alert("escaleno");
    }
}
