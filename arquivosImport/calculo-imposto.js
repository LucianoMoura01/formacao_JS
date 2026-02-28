
function impostoSobreSoldo (salarioBruto) {
    let imposto = 0;

    if (salarioBruto  <= 1100.00) {
        imposto = salarioBruto * 0.05;
    } else if (salarioBruto >= 1100.01 && salarioBruto <= 2500.00) {
        imposto = salarioBruto * 0.10;
    } else {
        imposto = salarioBruto * 0.15;
    }

    return imposto; 
}

function salarioLiquido (salarioBruto, imposto, adicionalBeneficios) {
    return salarioBruto - imposto + adicionalBeneficios;
}

module.exports = {
    impostoSobreSoldo,
    salarioLiquido
};