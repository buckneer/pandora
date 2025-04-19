
import {useWidth} from "../../../hooks/useWidth.ts";
import HamburgerMenu from "./HamburgerMenu.tsx";
import RegularMenu from "./RegularMenu.tsx";


const Navbar = () => {
	const regular = useWidth();


	return regular ? <RegularMenu /> : <HamburgerMenu />;
};

export default Navbar;
