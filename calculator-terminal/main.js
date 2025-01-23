// Variable permetant d'initialiser le package prompt-sync pour intéragir directement dans le terminal
const prompt = require("prompt-sync")();

console.log("🧮 Calculator: \n")

// Variable demandant à l'utilisateur d'entrer 2 nombres puis un opérateur
const num1 = prompt("⏳ Entrer le premier nombre ? ");
const num2 = prompt("⏳ Entrer le deuxième nombre ? ");
const operator = prompt("⏳ Entrer un opérateur ? ");

// Fonction flécher prenant en paramètre 2 nombres
const operatorFunction = (number1, number2) => {

  // Condition if permetant d'envoyer une erreur si l'utilisateur n'a pas entrer 1 des opérateur si dessous 
  if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    return console.log("🚫 Ce n'es pas un operateur !");
  }

  // Instruction Switch permetant de comparer chaque cas selon ce que l'utilisateur auras choisis comme opérateur
  switch (operator) {
    case "+":
      return Number(number1) + Number(number2);
    case "-":
      return Number(number1) - Number(number2);
    case "*":
      return Number(number1) * Number(number2);
    case "/":
      const resultDivision = Number(number1) / Number(number2);
      return Math.round(resultDivision * 100) / 100;
    default:
      console.log("🚫 Erreur d'opréation !");
  }
};

// Fonction flécher permetant de renvoyer le résultat final du calcul
const result = () => {

  // Condition if permetant de vérifier si les 2 nombres choisis sont bien des nombres
  if (!Number(num1) || !Number(num2)) {
    return console.log("🚫 Ce n'es pas un nombre !");
  }

  console.log(operatorFunction(num1, num2));
};
result();
