var n = parseInt(prompt("Digite o tamanho da sequencia"));
var mdc = parseInt(prompt("Entre com o 1 numero da sequencia"));
var i = 1;

while (i < n) {
  var numero = parseInt(prompt("Entre com o " + (i + 1) + " da sequencia"));
  i++;
  var divisor = 1;
  while (divisor <= mdc && divisor <= numero) {
    if (mdc % divisor == 0 && numero % divisor == 0) {
      var novoDmc = divisor;
    }
    divisor++;
  }
  mdc = novoDmc;
}

alert("MCD = " + novoDmc);
