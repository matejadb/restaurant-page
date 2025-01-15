import './styles.css';
import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';

homePage();

(function loader() {
	const homeButton = document.querySelector('.home');
	const menuButton = document.querySelector('.menu');
	const contactButton = document.querySelector('.contact');

	menuButton.addEventListener('click', menuPage);
	homeButton.addEventListener('click', homePage);
	contactButton.addEventListener('click', contactPage);
})();
