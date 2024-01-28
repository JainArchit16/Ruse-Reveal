import { Link } from "react-router-dom";
import css from '../index.css';
const Navbar = () => {
  return (
<nav>
  <Link to="/Home">Home</Link>
  <Link to="/Cart">Cart</Link>
	<Link to="/Button">Button</Link>
	<Link to="/Review">Review</Link>
	<Link to="/Price">Price</Link>
	
	<div class="animation start-home"></div>
</nav>
  );
};

export default Navbar;
