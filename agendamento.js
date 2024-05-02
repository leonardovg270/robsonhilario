function aparecerResultados() {
    var resultados = JSON.parse(localStorage.getItem('resultados')) || [];
    var resultadosLista = document.getElementById('resultadosLista');
    resultadosLista.innerHTML = '';

    if (resultados.length === 0) {
        resultadosLista.innerHTML = '<li>Nenhum Agendamento Feito</li>'
    } else {
        resultados.forEach(function(resultado) {
            var listaItem = document.createElement('li')
            listaItem.textContent = 'Data: ' + resultado.date + ' - Horario: ' + resultado.time
            resultadosLista.appendChild(listaItem)
        })
    }
}

function agendar() {
    
    var date = document.getElementById("data").value;
    var time = document.getElementById("horario").value;
    var resultadosSalvos = JSON.parse(localStorage.getItem('resultados')) || [];

    var seExistir = resultadosSalvos.some(function(resultado) {
        return resultado.date === date;
    });

    if (seExistir) {
        alert('Data já está agendada, escolha outra');
    } else {
        var resultado = {
            date: date,
            time: time
        };
        resultadosSalvos.push(resultado);
        localStorage.setItem('resultados', JSON.stringify(resultadosSalvos));
        alert('Agendamento Salvo!');
        aparecerResultados();
    }
        
};


window.onload = function() {
    aparecerResultados()
}

function mostrarTexto() {
    var texto = document.getElementById("resultadosLista")
    texto.classList.toggle("show")
} 

