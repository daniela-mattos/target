function inverterString(str) {
  return str.split("").reverse().join("");
}

const palavra = prompt("Digite uma palavra para inverter:");
const palavraInvertida = inverterString(palavra);

console.log(palavraInvertida);
alert(`A palavra invertida é: ${palavraInvertida}`);
