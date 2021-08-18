{
  let m = parseInt(prompt("Digite um número:"));
  if (m < 0 || m == 0) {
    alert("O valor tem que ser positivo e diferente de zero.");
  } else {
    for (hipo = 1; hipo <= m; hipo++) {
      var aux = 1;

      for (adj = 1; adj < hipo; adj++) {
        oposto = adj;

        while (adj * adj + oposto * oposto < hipo * hipo) {
          oposto++;
        }

        if (adj * adj + oposto * oposto == hipo * hipo) {
          alert(`Hipotenusa: ${hipo}\nCateto A: ${adj}\nCateto O: ${oposto}`);
          aux = 2;
        }
      }
    }
  }
}
