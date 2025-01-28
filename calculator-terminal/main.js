// Variable permetant d'initialiser le package prompt-sync pour intéragir directement dans le terminal
const prompt = require("prompt-sync")();

const globalFunction = () => {
  console.log("\n 🧮 Calculator: \n");

  console.log(
    "1. Addition \n, 2. Soustraction \n, 3. Multiplication \n, 4. Division \n"
  );

  // Variable demandant à l'utilisateur d'entrer 2 nombres puis un opérateur
  let operator = 0;

  const promptOperator = () => {
    const tempOperator = Number(prompt("⏳ Entrer un opérateur ? "));

    if (
      tempOperator !== 1 &&
      tempOperator !== 2 &&
      tempOperator !== 3 &&
      tempOperator !== 4
    ) {
      console.log("🚫 Error: is not 1, 2, 3 or 4. Retry !");
      return promptOperator();
    } else {
      operator = tempOperator;
    }
  };
  promptOperator();

  const num1 = prompt("⏳ Entrer le premier nombre ? ");
  const num2 = prompt("⏳ Entrer le deuxième nombre ? ");

  // Fonction flécher prenant en paramètre 2 nombres
  const operatorFunction = (number1, number2) => {
    // Instruction Switch permetant de comparer chaque cas selon ce que l'utilisateur auras choisis comme opérateur
    switch (operator) {
      case 1:
        const resultAdd = Number(number1) + Number(number2);
        console.log("Le Résultat est:", resultAdd);
        break;
      case 2:
        const resultSous = Number(number1) - Number(number2);
        console.log("Le Résultat est:", resultSous);
        break;
      case 3:
        const resultMult = Number(number1) * Number(number2);
        console.log("Le Résultat est:", resultMult);
        break;
      case 4:
        const resultDivision = Number(number1) / Number(number2);
        console.log("Le Résultat est:", Math.round(resultDivision * 100) / 100);
        break;
      default:
        console.log("🚫 Erreur d'opréation !");
    }
  };

  if (!Number(num1) || !Number(num2)) {
    return console.log("🚫 Ce n'es pas un nombre !");
  }
  operatorFunction(num1, num2);
};
globalFunction();

// Fonction flécher permetant de renvoyer le résultat final du calcul
const retry = () => {
  const retryCalcul = prompt("\n Relancer: [Y/N]").toLocaleLowerCase()

  if (retryCalcul === "y") {
    globalFunction()
    retry();
  } else if (retryCalcul === "n") {
    return
  } else {
    console.log("Erreur: choisissez Y/N")
    return retry()
  }
};
retry();
