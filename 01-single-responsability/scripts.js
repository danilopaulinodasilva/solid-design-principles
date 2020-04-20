/* 

Single Responsibility Principle Explained - SOLID Design Principles
https://www.youtube.com/watch?v=UQqY3_6Epbg 

"A class should have only one reason to change"
https://en.wikipedia.org/wiki/Single-responsibility_principle

*/

import logMessage from './logger.js'; // É necesário colocar .js para importar o módulo quando for executar no navegador

class CalorieTracker {
    
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    /*  
    
        A única responsabilidade da classe CalorieTracker é medir as calorias. Então a responsabilidade de mostrar uma mensagem
        está dentro um módulo que não está aqui, toda regra de negócio está sendo importada na linha 11 e sesndo executada na linha 31.
        A função logMessage só é executada aqui, não há código exposto que não tenha a ver com a classe.

    */

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if (this.currentCalories > this.maxCalories) {
            logMessage('Max calories exceeded');
        }
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
