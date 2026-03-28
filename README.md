# Calculadora de Idade e Faixa Etária

Página web interativa que calcula a idade do usuário com base no ano de nascimento e exibe a faixa etária correspondente junto com uma imagem ilustrativa de acordo com o gênero selecionado.

---

## Funcionalidades

- Cálculo de idade a partir do ano de nascimento
- Classificação por faixa etária: criança, adolescente, adulto(a) ou idoso(a)
- Exibição de imagem correspondente ao gênero e faixa etária
- Validações de entrada: campo vazio, gênero não selecionado e ano inválido

---

## Validações

| Situação | Comportamento |
|---|---|
| Campo de ano vazio | Alerta e foco no campo |
| Nenhum gênero selecionado | Alerta pedindo seleção |
| Ano resultando em idade negativa ou acima de 140 | Alerta de ano inválido |

---

## Faixas Etárias

| Idade | Classificação |
|---|---|
| 0 – 12 anos | Criança |
| 13 – 18 anos | Adolescente |
| 19 – 60 anos | Adulto(a) |
| 61 – 140 anos | Idoso(a) |

---

## Estrutura de Imagens

As imagens devem estar na pasta `img/` seguindo o padrão de nomenclatura abaixo:

```
img/
├── criancaM.jpg
├── criancaF.jpg
├── jovemM.jpg
├── jovemF.jpg
├── adultoM.jpg
├── adultoF.jpg
├── idosoM.jpg
└── idosoF.jpg
```

> `M` = Masculino, `F` = Feminino

---

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (puro, sem frameworks)

---

## Conceitos de JavaScript Aplicados

- `document.querySelector` e `document.getElementsByName` para captura de elementos do DOM
- `addEventListener` com função arrow para escuta de eventos
- `parseInt` para conversão de string para número inteiro
- `new Date().getFullYear()` para obter o ano atual
- Operador ternário (`condição ? a : b`) para definir gênero e sufixo da imagem
- `document.createElement` e `appendChild` para criação e inserção dinâmica de elementos
- `setAttribute` para definir atributos de elementos criados via JS
- Concatenação de strings com operador `+`
- `return` para interromper execução em caso de erro de validação
