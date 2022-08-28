function resultadoNota() {

    let nota = Number.parseInt(document.querySelector('#nota').value);
    let modulo = nota % 5;

    if (modulo != 0 && modulo == 3) {
        nota += 2
        window.alert(`Nota: ${nota} aprovado`);

    } else if (modulo != 0 && modulo == 4) {
        nota += 1;
        window.alert(`Nota: ${nota} aprovado`);
    } else if (nota < 38) {
        window.alert("reprovado");
    }
    else {
        window.alert(`Nota: ${nota} aprovado`);
    }
}
