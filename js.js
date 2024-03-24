// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
]

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isAdult = people.some(person => {
	const date = new Date().getFullYear()
	return date - person.year >= 19
})
console.log({ isAdult })

// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(human => {
	const date = new Date().getFullYear()
	return date - human.year >= 19
})

console.log({ allAdults })

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findId = comments.find(comment => {
	return comment.id === 823423
})
console.log({ findId })

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of

const solutionOne = () => {
	const index = comments.findIndex(element => element.id === 823423)
	// jeśli wartosć będzie zwrócona jako -1, to znaczy że jest false

	comments.splice(index, 1)
	console.log(comments)
}
solutionOne()

const comments2 = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
]

const solutionTwo = () => {
	const index = comments2.findIndex(element => element.id === 823423)
    console.log(index);
	const newComments = [...comments2.slice(0, index), ...comments2.slice(index + 1)];
	console.log(newComments)
}
solutionTwo()

//  W drugim rozwiązaniu otrzymujemy nową tablicę, z już usuniętym elementem, pozostawiając pierwotną tablicę bez zmian
