let opcao = "5";

do {
  opcao = prompt(
    "Seja Bem-Vindo(a)!\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1. Opção1" +
      "\n2. Opção2" +
      "\n3. Opção3" +
      "\n4. Opção4" +
      "\n5. Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a Opção 1");
      break;
    case "2":
      alert("Você escolheu a Opção 2");
      break;
    case "3":
      alert("Você escolheu a Opção 3");
      break;
    case "4":
      alert("Você escolheu a Opção 4");
      break;
    case "5":
      alert("O programa será encerrado!");
      break;
    default:
      alert("Você escolheu uma opção inválida.");
  }
} while (opcao !== "5");
