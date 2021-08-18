function primeNumber(num) {
  for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false;
  return true;
}

var determinadoNumero = parseInt(
  prompt("Digite quantos numeros vc quer testar")
);
var lista = [];
var soma = 0;
for (var aux = 0; aux < determinadoNumero; aux++) {
  lista[aux] = parseInt(prompt("Digite um valor"));
  if (primeNumber(lista[aux])) {
    soma += lista[aux];
  }
}
alert("SOMA " + soma);
