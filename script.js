// alert('hello');

// function enter(e) {
// 	e.preventDefault();
// 	alert('hello');
// }

window.onload = () => {
	// enter();
};

const list = [];

console.log(list);

// forEach()
// const numbers = [28, 77, 45, 99, 27];

// numbers.forEach((number) => {
// 	console.log(number);
// });

// filter()
// const randomNumbers = [4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter((n) => {
// 	return n > 5;
// });
// console.log(filteredArray); //prints new array which numbers are less than 5

//map()
// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
// const announcements = finalParticipants.map((member) => {
// 	return member + ' joined the contest.';
// });
// console.log(announcements); // prints the same array with 'joined the contest'

const remove = () => {
	// console.log('remove');
	// list.pop();
	// console.log(list);
	const listIndividual = document.getElementById('listIndividual').textContent;

	const filteredArray = list.filter((n) => {
		return n == 'hello';
	});
	const divList = document.getElementById('myList');
	divList.innerHTML =
		'<ul>' +
		filteredArray
			.map((n) => {
				return (
					'<li id="listIndividual">' +
					n +
					'</li>' +
					'<button onClick="remove()">x</button>'
				);
			})
			.join('') +
		'</ul>';
};

const enter = () => {
	// alert('hello');
	event.preventDefault(); // prevents refresh
	// alert(document.getElementById('myThing').value);
	list.unshift(document.getElementById('myThing').value);
	const divList = document.getElementById('myList');
	divList.innerHTML =
		'<ul>' +
		list
			.map((item) => {
				return (
					'<li id="listIndividual">' +
					item +
					'</li>' +
					'<button onClick="remove()">x</button>'
				);
			})
			.join('') +
		'</ul>';
	console.log(listIndividual);

	// alert(list);
};

// const newList = list.map((item) => {
// 	return item + 'do not do!';
// });

// alert(newList);

// map through array and display it
// remove item from array when press button
