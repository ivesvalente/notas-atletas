let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedia(objAtletas) {
  for (let i = 0; i < objAtletas.length; i++) {
    // 1. Obtém as notas e ordena em ordem crescente
    let notas = objAtletas[i].notas.sort((a, b) => a - b);

    // 2. Elimina a menor e a maior nota (as das pontas)
    let notasComputadas = notas.slice(1, 4);

    // 3. Calcula a soma das notas restantes
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });

    // 4. Calcula a média e exibe os resultados
    let media = soma / notasComputadas.length;

    console.log(`Atleta: ${objAtletas[i].nome}`);
    console.log(`Notas Obtidas: ${objAtletas[i].notas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // Linha em branco para separar os atletas
  }
}

// Executa a função
calcularMedia(atletas);
