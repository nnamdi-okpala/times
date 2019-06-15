"use strict";
//@docs https://basarat.gitbooks.io/typescript/docs/
/**
 * 
 *	@interface {ClockInterface} The MAIN return interface for the ClockConstructor
 *	@interface {ClockConstructor} The implemented interface for the Clock Class
 * 	@interface {ClockProcessingNode} The MAIN interface for handling the namespace for the Clock Class
 * 	@class     {Clock} The class for creating a clock Object
 * 	@interface {ClockTimeProcessingInterface} The interface for processing  the time dynamical 
 * 
 * 	@type { datesArray } evaulates a arrays of string  
 * 
 */

 
export type datesArray = string[]

interface ClockTimeProcessingInterface {

}

interface ClockInterface {

}

interface ClockConstructor {
	new(date: string): ClockInterface,
	
}

class Clock implements ClockInterface {
	
	constructor(private date: string) {

	}

}
export { Clock };

class Timer extends Clock implements ClockInterface {
	
}

var createClock = function (date:string): ClockInterface {
	return new Clock(date)
}

console.log(createClock("2001-05-19"))
export { Timer }
