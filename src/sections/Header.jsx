import Logo from "../components/header/Logo";
import Nav from "../components/header/Nav";
import ToggleTheme from "../components/header/ToggleTheme";
import SettingTheme from "../components/header/SettingTheme";
import { useState } from "react";

function Header() {
	const [showMenu, setShowMenu] = useState(false)
	const toggleMenu = ()=>{
		setShowMenu(!showMenu)
	}
	return (
		<>
			<header className={`p-fixed w-100 ${showMenu ? 'show-menu' : ''}`}>
				<div className="container d-flex align-center jc-between">
					<Logo />
					<ToggleTheme />
					<SettingTheme />
					<Nav toggleMenu={toggleMenu}/>
				</div>
			</header>
		</>
	);
}

export default Header;
