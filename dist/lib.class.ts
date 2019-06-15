"use strict";
//@docs https://basarat.gitbooks.io/typescript/docs/
/**
 *	@interface {ClockInterface} The MAIN return interface for the ClockConstructor
 *	@interface {ClockConstructor} The implemented interface for the Clock Class
 * 	@interface {ClockProcessingNode} The MAIN interface for handling the namespace for the Clock Class
 * 	@class     {Clock} The class for creating a clock Object
 * 	@interface {ClockTimingInterface} The interface for processing  the time dynamical 
 * 
 */

 type dateArray = string[]
 interface ClockTimeProcessingInterface{
	timer(): dateArray
 }

class Timer implements ClockTimeProcessingInterface {
	timer(): dateArray {
		throw new Error("Method not implemented.");
	}

}

interface ClockInterface {
	count():void		//return a type of date object deconstructed from the dateConstructor

}

interface ClockConstructor {
	new(date: string): ClockInterface,	
	timer():ClockTimeProcessingInterface
}

class Clock implements ClockInterface {
	count(): void {
		throw new Error("Method not implemented.");
	}
	constructor(private date: string) {

	}
	
}

export { Clock };

