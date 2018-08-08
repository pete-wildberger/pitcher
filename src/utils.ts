// global utility functions
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
