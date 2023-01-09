import Logo from "../components/header/Logo";
import Nav from "../components/header/Nav";
import ToggleTheme from "../components/header/ToggleTheme";
import SettingTheme from "../components/header/SettingTheme";
import { useEffect, useState } from "react";

function Header() {
	const [showMenu, setShowMenu] = useState(false)
	const [sticky, setSticky] = useState('')

	useEffect(() => {
		const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
		const userPrefersDark = matches;

		if (localStorage.getItem("isDark") === null && userPrefersDark) {
			localStorage.setItem("isDark", "dark");
		}

		if (localStorage.getItem("theme") === null) {
			localStorage.setItem("theme", "default");
		}

		changeTheme()
	}, [])

	const toggleMenu = () => setShowMenu(!showMenu)

	const toggleDark = () => {
		const newValue = localStorage.getItem('isDark') === 'dark' ? 'light' : 'dark'
		localStorage.setItem("isDark", newValue)
		changeTheme()
	}
	const changeTheme = (theme = localStorage.getItem('theme')) => {
		localStorage.setItem('theme', theme)

		document.documentElement.setAttribute(
			"data-theme",
			`${theme}-${localStorage.getItem("isDark")}`
		)

	}


	// Función optimizada con requestAnimationFrame
	function headerSticky() {
		requestAnimationFrame(() => {
			window.scrollY > 0 ? setSticky('sticky') : setSticky('');
		});
	}

	// Asignación de la función optimizada al evento scroll
	window.addEventListener('scroll', headerSticky);

	return (
		<>
			<header className={`p-fixed w-100 ${showMenu ? 'show-menu' : ''} ${sticky}`}>
				<div className="container d-flex align-center jc-between flex-column-md">
					<Logo />
					<Nav toggleMenu={toggleMenu} />
					<ToggleTheme toggleDark={toggleDark} />
					<SettingTheme changeTheme={changeTheme} />
				</div>
			</header>
		</>
	);
}

export default Header;
