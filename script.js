// Captura os elementos do HTML pelo id ou name
const inputAno = document.querySelector('#txtano')         // campo de texto onde o usuário digita o ano
const buttonVerificar = document.querySelector('#btnVerificar') // botão que dispara a verificação
const divResultado = document.querySelector('#div2')       // div onde o resultado será exibido
const inputSexo = document.getElementsByName('radsex')     // retorna uma lista com os dois radio buttons (índice 0 = Homem, 1 = Mulher)

let generoPessoa = '' // variável que vai guardar o gênero escolhido ('Homem' ou 'Mulher')

// Cria um elemento <img> dinamicamente via JS (não está no HTML)
const img = document.createElement('img')
img.setAttribute('id', 'foto') // define o atributo id da imagem como 'foto'

// addEventListener escuta o evento 'click' no botão e executa a função arrow (=>) abaixo
buttonVerificar.addEventListener('click', () => {

    // Valida se o campo de ano está vazio antes de continuar
    if (inputAno.value === '') {
        alert('Por favor, preencha o campo corretamente.')
        inputAno.focus() // devolve o foco ao campo para o usuário digitar
        return           // interrompe a execução do restante da função
    }

    // Valida se nenhum radio button foi marcado
    // inputSexo[0] = primeiro radio (Homem), inputSexo[1] = segundo radio (Mulher)
    // .checked retorna true se o radio estiver marcado, false se não estiver
    if (!inputSexo[0].checked && !inputSexo[1].checked) {
        alert('Selecione o sexo.')
        return
    }

    let ano = parseInt(inputAno.value) // parseInt converte a string do input para número inteiro
    let anoAtual = new Date().getFullYear() // new Date() pega a data atual, .getFullYear() extrai só o ano
    let idade = anoAtual - ano // calcula a idade subtraindo o ano de nascimento do ano atual

    // Valida se a idade está fora de um intervalo aceitável
    if (idade < 0 || idade > 140) {
        alert('Insira um ano de nascimento válido.')
        inputAno.value = ''
        inputAno.focus()
        return
    }

    // Operador ternário: condição ? valorSeVerdadeiro : valorSeFalso
    // Se o radio Homem (índice 0) estiver marcado, sufixo = 'M', senão = 'F'
    let sufixo = inputSexo[0].checked ? 'M' : 'F'
    generoPessoa = inputSexo[0].checked ? 'Homem' : 'Mulher'

    let faixa = ''   // vai receber o texto da faixa etária (ex: 'criança', 'adulto(a)')
    let nomeImg = '' // vai receber o nome base da imagem (ex: 'crianca', 'adulto')

    // Define a faixa etária e o nome da imagem conforme a idade calculada
    // Não precisa checar o limite inferior pois os blocos são encadeados (else if)
    if (idade <= 12) {
        faixa = 'criança'
        nomeImg = 'crianca' // sem cedilha no nome do arquivo para evitar problemas de encoding

    } else if (idade <= 18) {
        faixa = 'adolescente'
        nomeImg = 'jovem'

    } else if (idade <= 60) {
        faixa = 'adulto(a)'
        nomeImg = 'adulto'

    } else {
        faixa = 'idoso(a)'
        nomeImg = 'idoso'
    }

    // Exibe o resultado na div usando concatenação de strings com o operador +
    divResultado.innerHTML = 'Idade calculada: ' + idade + ' anos. Você é ' + generoPessoa + ' e ' + faixa + '.'

    // Monta o caminho da imagem combinando o nome base + sufixo de gênero + extensão
    // Exemplo: 'img/adultoM.jpg' ou 'img/criancaF.jpg'
    img.setAttribute('src', 'img/' + nomeImg + sufixo + '.jpg')

    // Insere a imagem dentro da divResultado (appendChild adiciona como último filho do elemento)
    divResultado.appendChild(img)

    // Limpa o campo e devolve o foco para o usuário fazer uma nova consulta
    inputAno.value = ''
    inputAno.focus()
})