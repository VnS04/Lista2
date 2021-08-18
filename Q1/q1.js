{
  let m = parseInt(prompt("Digite o valor seguido de 0:"));
  if (m < 0 || m == 0 || m % 10 != 0) {
    alert(
      "O valor deve ser positivo e diferente de zero, e deve possuir um zero no final."
    );
  } else {
    var sum = 0;
    for (let i = 0; i < m; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
    alert(sum);
  }
}
