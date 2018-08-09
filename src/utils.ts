// global utility functions
export const fielders: string[] = ['c', 'first', 'second', 'third', 'short', 'lf', 'cf', 'rf'];

// Fisher–Yates shuffle
export function shuffle(array: any[]): any[] {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
export function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
export function pitch_roll(arr: number[], roll: number): number {
	if (roll > 0 && roll < arr[0]) {
		return 0;
	}
	if (roll > arr[0] && roll < arr[1]) {
		return 1;
	}
	if (roll > arr[1] && roll < arr[2]) {
		return 2;
	}
	if (roll > arr[2] && roll < arr[3]) {
		return 3;
	} else {
		return 4;
	}
}
