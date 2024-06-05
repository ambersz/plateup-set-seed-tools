import { hash } from "../workers/reverse-engineered/prng";
let prevChars = "qwertyuiopasdfghjklxcvbnm123456789"; //qeryuiopasdfghjklxcvbnm123456789 has collision rate of 0.126953125; qeryuiopadfghjklxcvbnm123456789 has collision rate of 0.09989594172736732
// let prevChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklxcvbnm123456789"; // 168BDFHKNPSVZabdfhjkmnpruvy; QUPASDFHJKZXVBNMryupasdfhjkxvbnm125689 has collision rate of 0.1149584487534626
// let prevChars = "bdghjmqrtvwxy346789";
// let prevChars = "bdghjmqrtwx34789";
// let prevChars = "abcdefghijklmnopqruvyz12569";
// let prevChars = "abcdefghijklmnopqruvyz12569";
// let prevChars = "12569abcdefghijklmnopqruvyz";
let collisionRate = Infinity;
while (true) {
	// while (collisionRate > 0.15) {
	let minCollisionRate = collisionRate;
	let bestChars = prevChars;
	for (let removeChar = 0; removeChar < prevChars.length; removeChar++) {
		const chars =
			prevChars.slice(0, removeChar) + prevChars.slice(removeChar + 1);
		let innerCollisionRate = Infinity;
		for (let i = 1; i < 3; i++) {
			console.log(`start ${i}-char collision search`);
			let seedChars = new Array(i).fill(0);
			const collisions: { [hash: string]: string[] } = {};
			seeds: while (true) {
				const seed = seedChars.map((dex) => chars[dex]).join("");
				// test hash
				const hashed = hash(seed);
				if (!collisions[hashed]) {
					collisions[hashed] = [];
				}
				collisions[hashed].push(seed);
				// increment chars
				let j = i;
				while (j--) {
					if (seedChars[j] === chars.length - 1) {
						if (j === 0) break seeds;
						seedChars[j] = 0;
					} else {
						seedChars[j]++;
						break;
					}
				}
			}
			let numCollisionSeeds = 0;
			for (const collidedSeeds of Object.values(collisions)) {
				if (collidedSeeds.length > 1)
					numCollisionSeeds += collidedSeeds.length - 1;
				continue;
				const unique: string[] = [];
				for (const cand of collidedSeeds) {
					let distinct = true;
					substrings: for (let i = 0; i < cand.length; i++) {
						if (unique.some((u) => u[i] === cand[i])) {
							distinct = false;
							break substrings;
						}
						for (let j = i + 2; j < cand.length; j++) {
							if (
								unique.some(
									(u) => hash(u.slice(i, j)) === hash(cand.slice(i, j))
								)
							) {
								distinct = false;
								break substrings;
							}
						}
					}
					if (distinct) unique.push(cand);
				}
				if (unique.length > 1) {
					// i === 3 && console.log(`${unique.join(",")} have the same hash`);
				}
			}
			innerCollisionRate = numCollisionSeeds / chars.length ** i;
			console.log(
				`${numCollisionSeeds} out of ${chars.length ** i} are collisions: ${(
					innerCollisionRate * 100
				).toPrecision(2)}%`
			);
		}
		if (innerCollisionRate < minCollisionRate) {
			minCollisionRate = innerCollisionRate;
			bestChars = chars;
		}
	}
	if (bestChars === prevChars) {
		console.log(`No improvement on ${prevChars}`);
		break;
	} else {
		collisionRate = minCollisionRate;
		prevChars = bestChars;
		console.log(`${bestChars} has collision rate of ${minCollisionRate}`);
		if (collisionRate <= 0.1149584487534626) break;
	}
}
