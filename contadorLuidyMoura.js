function contadorLuidyMoura() {

    let contador = document.querySelector('#contador').value;
    let saida = [];
    for (let i = 1; i <= contador; i++) {
        if (i % 5 == 0 && i % 9 == 0) {
            saida.push(" LuidyMoura")
        } else if (i % 5 == 0) {
            saida.push(" Luidy");
        } else if (i % 9 == 0) {
            saida.push(" Moura")
        } else {
            saida.push(" "+i);
        }
    } 
    document.write(saida)
    return saida;
}
