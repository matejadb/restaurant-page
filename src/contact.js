export function contactPage() {
	document.title = 'Restaurant Page | Contact';
	const content = document.querySelector('#content');
	content.textContent = '';

	const contactDiv = document.createElement('div');
	contactDiv.classList.add('contact');

	const contactTitle = document.createElement('h1');
	contactTitle.textContent = 'Contact Us';
	contactDiv.appendChild(contactTitle);

	const contacts = [
		{
			name: 'Mama Bear',
			position: 'Chef',
			phone: '555-555-5554',
			email: 'totallyRealEmail@notFake.com',
		},
		{
			name: 'Papa Bear',
			position: 'Manager',
			phone: '555-555-5555',
			email: 'perfectlyRealEmail@notFake.com',
		},
		{
			name: 'Baby Bear',
			position: 'Waiter',
			phone: '555-555-5556',
			email: 'totallyRealEmail@notFake.com',
		},
	];
	function createContacts(item) {
		const itemDiv = document.createElement('div');
		itemDiv.classList.add('contact-item');

		const name = document.createElement('h3');
		name.textContent = item.name;
		itemDiv.appendChild(name);

		const div = document.createElement('div');

		const position = document.createElement('p');
		position.textContent = item.position;
		const phone = document.createElement('p');
		phone.textContent = item.phone;
		const email = document.createElement('p');
		email.textContent = item.email;
		div.append(position, phone, email);
		itemDiv.appendChild(div);

		return itemDiv;
	}

	contacts.forEach((item) => {
		const contact = createContacts(item);
		contactDiv.appendChild(contact);
		content.appendChild(contactDiv);
	});
}
