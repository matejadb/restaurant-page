import honeyTea from './honey-tea.png';

export function menuPage() {
	const content = document.querySelector('#content');
	content.textContent = '';

	const menu = document.createElement('h1');
	menu.textContent = 'Menu';
	content.appendChild(menu);

	const menuDiv = document.createElement('div');
	menuDiv.classList.add('menu');

	const beverageItems = [
		{
			name: 'Honey Tea',
			description:
				'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',
			price: '$2',
			image: honeyTea,
		},
		{
			name: 'Beary Tea',
			description:
				'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.',
			price: '$3',
			image: honeyTea,
		},
	];

	const beverages = document.createElement('div');
	beverages.classList.add('beverages');
	const beveragesTitle = document.createElement('h2');
	beveragesTitle.textContent = 'Beverages';
	beverages.appendChild(beveragesTitle);
	menuDiv.appendChild(beverages);

	function createBeverages(item) {
		const itemDiv = document.createElement('div');
		itemDiv.classList.add('menu-item');

		const itemName = document.createElement('h3');
		itemName.textContent = item.name;
		itemDiv.appendChild(itemName);

		const itemDesc = document.createElement('p');
		itemDesc.textContent = item.description;
		itemDiv.appendChild(itemDesc);

		const itemPrice = document.createElement('p');
		itemPrice.textContent = item.price;
		itemDiv.appendChild(itemPrice);

		const itemImg = document.createElement('img');
		itemImg.src = item.image;
		itemDiv.appendChild(itemImg);

		return itemDiv;
	}

	beverageItems.forEach((item) => {
		const beverage = createBeverages(item);
		beverages.appendChild(beverage);
		content.appendChild(menuDiv);
	});
}
