/* 

Single Responsibility Principle Explained - SOLID Design Principles
https://www.youtube.com/watch?v=UQqY3_6Epbg 

"A class should have only one reason to change"
https://en.wikipedia.org/wiki/Single-responsibility_principle

*/

import logMessage from './logger.js'; // Necessary use .js to import the module when we need to run it on browser

class CalorieTracker {
    
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    /*  
    
        The only responsability of this class is track calories. So the responsability of log the message is in a module 
        outside here this means the enginnering of this action is imported at line 11 and called in line 31 of this code. 
        What the logMessage do, is not exposed here and there is no responsability here about it.

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
