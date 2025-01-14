export function homePage() {
	document.title = 'Restaurant Page | Home';
	const content = document.querySelector('#content');

	const restaurantName = document.createElement('h1');
	restaurantName.classList.add('restaurant-name');
	restaurantName.textContent = 'Our restaurant!';

	const description = document.createElement('div');
	description.classList.add('description');
	const descriptionText = document.createElement('p');
	descriptionText.textContent =
		'Since 1980 our restaurant has been serving only the highehst qualityfood. Come check out on your own!';
	description.appendChild(descriptionText);

	const workHours = document.createElement('div');
	workHours.classList.add('work-hours');
	const hoursTitle = document.createElement('h3');
	hoursTitle.textContent = 'Hours';
	const hoursDiv = document.createElement('div');
	hoursDiv.classList.add('hours');
	const hours = {
		Monday: '8am - 8pm',
		Tuesday: '6am - 6pm',
		Wednesday: '6am - 6pm',
		Thursday: '6am - 6pm',
		Friday: '6am - 10pm',
		Saturday: '8am - 10pm',
		Sunday: '8am - 10pm',
	};
	for (const [day, time] of Object.entries(hours)) {
		const p = document.createElement('p');
		p.textContent = `${day}: ${time}`;
		hoursDiv.appendChild(p);
	}
	workHours.append(hoursTitle, hoursDiv);

	const location = document.createElement('div');
	location.classList.add('location');
	const locationTitle = document.createElement('h3');
	locationTitle.textContent = 'Location';
	const locationDiv = document.createElement('div');
	const locationP = document.createElement('p');
	locationP.textContent = '123 Forest Drive, Forestville, Maine';
	locationDiv.appendChild(locationP);
	location.append(locationTitle, locationDiv);

	content.append(restaurantName, description, workHours, location);
}
