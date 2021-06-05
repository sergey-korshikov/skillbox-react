import { hot } from 'react-hot-loader/root';

const HeaderComponent = () => (
	<header>
		<h1>Reddit for our own!</h1>
		<h2>It is working!</h2>
	</header>
);

export const Header = hot(HeaderComponent);
