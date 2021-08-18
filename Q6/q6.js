var n = parseInt(prompt("Entre com o numero a ser decomposto"));
var fator = 2;

while (n > 1) {
  var mult = 0;
  while (n % fator == 0) {
    mult++;
    n = n / fator;
  }
  if (mult != 0) {
    mostra("Fator: " + fator + " Multiplicidade: " + mult);
  }
  fator++;
}
