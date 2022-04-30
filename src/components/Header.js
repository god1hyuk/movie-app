import { Link, useLocation } from 'react-router-dom';

function Header() {
	const currentPath = useLocation();
	return (
		<header>
			{currentPath.pathname === "/" ? null : <Link to="/" className="prev-btn">◀︎◀︎</Link>}
			<h1 className="logo">GODFLIX</h1>
		</header>
	);
}

export default Header;