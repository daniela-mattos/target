const dadosPorEstado = [
    {
        "estado": "SP", 
        "faturamento": 67836.43
    },
    {
        "estado": "RJ", 
        "faturamento": 36678.66
    },
    {
        "estado": "MG", 
        "faturamento": 29229.88
    },
    {
        "estado": "ES", 
        "faturamento": 27165.48
    },
    {
        "estado": "Outros", 
        "faturamento": 19849.53   

    }
];

function menorValorDeFaturamento(data) {
    const valoresValidos = data.filter(dia => dia.valor > 0); 
    return Math.min(...valoresValidos.map(dia => dia.valor));
}

function maiorValorDeFaturamento(data) {
    const valoresValidos = data.filter(dia => dia.valor > 0);
    return Math.max(...valoresValidos.map(dia => dia.valor));
}

function calcularMediaMensal(data) {
    const valoresValidos = data.filter(dia => dia.valor > 0);
    const soma = valoresValidos.reduce((acc, dia) => acc + dia.valor, 0);
    return soma / valoresValidos.length;
}

// Função para contar o número de dias com faturamento acima da média mensal
function diasAcimaDaMedia(data, mediaMensal) {
    return data.filter(dia => dia.valor > mediaMensal && dia.valor > 0).length;
}

function calculaPercentualPorEstado(data) {
    // Primeiro, somar o faturamento total
    const totalFaturamento = data.reduce((acc, estado) => acc + estado.faturamento, 0);
    
    // Agora, calcular o percentual de cada estado
    const percentuais = data.map(estado => {
        const percentual = (estado.faturamento / totalFaturamento) * 100;
        return {
            estado: estado.estado,
            faturamento: estado.faturamento,
            percentual: percentual.toFixed(2) // Limita para 2 casas decimais
        };
    });

    return percentuais;
}



fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const calculoPorEstado = calculaPercentualPorEstado(dadosPorEstado);
    console.log("Percentual de faturamento por estado:", calculoPorEstado);
    console.log("");
    
    const lista = document.getElementById('lista-valores');
    calculoPorEstado.forEach(valor => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = `Estado: ${valor.estado} | Faturamento: ${valor.faturamento} | Percentual: ${valor.percentual}%`;                  // Define o conteúdo do <li>
        lista.appendChild(li);                   // Insere o <li> dentro do <ul>
    });
    
    const menorFaturamento = menorValorDeFaturamento(data);
    const maiorFaturamento = maiorValorDeFaturamento(data);
    const mediaMensal = calcularMediaMensal(data);
    const diasAcimaMedia = diasAcimaDaMedia(data, mediaMensal);


    document.getElementById('menor-faturamento').innerText = menorFaturamento.toFixed(2);
    document.getElementById('maior-faturamento').innerText = maiorFaturamento.toFixed(2);
    document.getElementById('media-mensal').innerText = mediaMensal.toFixed(2);
    document.getElementById('dias-acima-media').innerText = diasAcimaMedia;

    console.log("Menor faturamento:", menorFaturamento);
    console.log("Maior faturamento:", maiorFaturamento);
    console.log("Média mensal:", mediaMensal.toFixed(2)); // Limitar a 2 casas decimais
    console.log("Dias com faturamento acima da média:", diasAcimaMedia);



  })
  .catch(error => {
    console.error('Erro ao buscar os dados:', error);
  });
