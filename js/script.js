// Função que é chamada quando o botão "Ver Detalhes" é clicado
function mostrarDetalhes(servicoId) {
    // Seleciona o elemento do serviço com o ID fornecido
    var servico = document.getElementById(servicoId);
    
    // Seleciona o segundo parágrafo dentro da div do serviço (a descrição)
    var descricao = servico.querySelector('p:nth-of-type(2)');
    
    // Modificando o estilo da descrição para destacar a informação
    descricao.style.fontWeight = 'bold'; // Deixa o texto em negrito
    descricao.style.color = 'green'; // Muda a cor para verde
    
    // Exibindo um alerta com o nome do serviço
    alert("Detalhes adicionais sobre o serviço: " + servicoId);
}
