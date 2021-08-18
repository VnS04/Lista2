{
  let m = parseInt(prompt("Informe o valor para m"));
  let n = parseInt(prompt("Informe  o valor para n"));
  if (m < 0 || m == 0 || n < 0 || n == 0) {
    alert("O valor deve ser positivo e diferente de zero.");
  } else {
    let x, y;
    let valor;
    let xmax, ymax;
    let max;

    xmax = ymax = 0;
    max = 0;

    for (x = 0; x <= n; x++) {
      for (y = 0; y <= m; y++) {
        valor = x * y - x * x + y;
        if (valor > max) {
          max = valor;
          xmax = x;
          ymax = y;
        }
      }
    }
    alert(`Máximo da função: ${max} | x = ${xmax}, y = ${ymax} |`);
  }
}
