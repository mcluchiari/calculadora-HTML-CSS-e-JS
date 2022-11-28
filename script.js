function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

function back() {
    var resultado = document.getElementById('text1').innerHTML;
    document.getElementById('text1').innerHTML = resultado.substring(0, resultado.length -1);
}