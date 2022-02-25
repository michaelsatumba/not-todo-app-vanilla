// alert('hello');

// function enter(e) {
// 	e.preventDefault();
// 	alert('hello');
// }

window.onload = () => {
	// enter();
};

const list = [];

const remove = () => {
	// alert('remove');
	// list.pop();
	// alert(list);
	const divList = document.getElementById('myList');
	divList.innerHTML =
		'<ul>' +
		list
			.map((item) => {
				if (item == item) {
				} else {
					return (
						'<li>' + item + '</li>' + '<button onClick="remove()">x</button>'
					);
				}
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
					'<li>' + item + '</li>' + '<button onClick="remove()">x</button>'
				);
			})
			.join('') +
		'</ul>';

	// alert(list);
};

// const newList = list.map((item) => {
// 	return item + 'do not do!';
// });

// alert(newList);

// map through array and display it
// remove item from array when press button
