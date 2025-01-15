import './styles.css';
import { homePage } from './home';
import { menuPage } from './menu';

homePage();
console.log('test');
(function loader() {
	const homeButton = document.querySelector('.home');
	const menuButton = document.querySelector('.menu');
	const contactButton = document.querySelector('.contact');

	menuButton.addEventListener('click', menuPage);
	homeButton.addEventListener('click', homePage);
})();
