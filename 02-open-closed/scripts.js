/* 

Open/Closed Principle Explained - SOLID Design Principles
https://www.youtube.com/watch?v=-ptMtJAdj40

"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"
https://en.wikipedia.org/wiki/Open-closed_principle

*/

/* 

Cada classe possui uma responsabilidade, que é processar o tipo de pergunta
e imprimir as respostas. Ou seja, sempre haverá o método printQuestionChoices()
que será invocado na função printQuiz() mais abaixo.

*/

class BooleanQuestion {

    // A descrição da pergunta
    constructor(description) {
        this.description = description
    }

    // As respostas que serão apresentadas
    printQuestionChoices() {
        console.log('1. True')
        console.log('2. False')
    }

}

class MultipleChoiceQuestion {

    // A descrição da pergunta e as opções de resposta
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    // Como será recebido um array em options, então é necessário iterar essas opções
    printQuestionChoices() {
        this.options.forEach((option,index) => {
            console.log(`${index +1}. ${option}`) // Aproveitando que é um array, então é printado o index de cada resposta
        })
    }
}

class TextQuestion {

    // A descrição da pergunta
    constructor(description) {
        this.description = description
    }

    // A resposta que será apresentada
    printQuestionChoices() {
        console.log('Answer:___________________')
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }
    
    printQuestionChoices() {
        console.log('Minimum:___________________')
        console.log('Maximum:___________________')
    }
}

/* 

A função abaixo apenas executa, não há necessidade de modificar a função ou o código dentro dela
caso seja adicionado mais uma pergunta com o tipo de resposta. 

A função printQuiz() está aberta para fazer coisas novas, no caso de se inserir um novo tipo de
pergunta ao array questions[], porém fechada para modificação, ou seja, nunca será alterada
para adicionar uma nova funcionalidade/pergunta.

*/

function printQuiz(questions) {
    
    // A função recebe um array (questions) por isso é iterado por cada questão
    questions.forEach(question => { 
        console.log(question.description)
        question.printQuestionChoices() // Chamando o método printQuestionChoices() dentro de cada classe.
        console.log('')
    });
}

/*

Aqui estão todas as perguntas, onde basicamente é instanciado uma nova classe de cada tipo de pergunta.
Dependendo da classe, se passa um descritivo apenas ou o descritivo e as opções.
As vezes a classe irá apresentar as respostas por si só.

*/

const questions = [
    new BooleanQuestion('This video is useful.'),
    new MultipleChoiceQuestion('What is your favorite language?', ['CSS','PHP','HTML', 'JS', 'Python']),
    new TextQuestion('Describe your favorite JS feature'),
    new RangeQuestion('What is the speed in your city?'),
]

printQuiz(questions);