import { Link } from "react-router-dom";

function Nav({ toggleMenu, removeActiveLink }) {
	const handleOnClick = (e) => {
		toggleMenu()

		removeActiveLink()
		e.target.classList.add('active')

	}
	return (
		<>
			<div className="menu__hamburguer d-flex align-center">
				<div className="d-flex flex-column w-100" onClick={toggleMenu}>
					<span className="line w-100"></span>
					<span className="line w-100"></span>
					<span className="line w-100"></span>
				</div>
			</div>
			<div className="menu__content p-fixed d-flex flex-column jc-between">
				<div className="menu__header container d-flex align-center jc-between">
					<div className="logo d-flex align-center">
						<img
							className="d-flex"
							src="https://marcosrubi.github.io/_mrubi-v2023/public/images/logo.webp"
							alt="Logo de Marcos Rubí"
						/>
						<span>Marcos Rubí</span>
					</div>
					<div className="menu__close d-flex flex-column jc-center" onClick={toggleMenu}>
						<span className="line w-100"></span>
						<span className="line w-100"></span>
					</div>
				</div>
				<nav className="container">
					<ul className="d-flex align-center flex-column-sm text-center">
						<li className="w-100"><Link to={'#sobre-mi'} className="w-100 d-inline-block" onClick={(e) => handleOnClick(e)}>Sobre Mí</Link></li>
						<li className="w-100"><Link to={'#proyectos'} className="w-100 d-inline-block" onClick={(e) => handleOnClick(e)}>Proyectos</Link></li>
						<li className="w-100"><Link to={'#experiencia'} className="w-100 d-inline-block" onClick={(e) => handleOnClick(e)}>Experiencia</Link></li>
						<li className="w-100"><Link to={'#certificados'} className="w-100 d-inline-block" onClick={(e) => handleOnClick(e)}>Certificados</Link></li>
						<li className="w-100"><Link to={'#contactar'} className="w-100 d-inline-block" onClick={(e) => handleOnClick(e)}>Contactar</Link></li>
					</ul>
				</nav>
				<div className="menu__footer">
					<div className="container d-flex align-center jc-between">
						<a href="mailto:danielhernandez9980%40gmail.com" className="btn btn-secondary" onClick={toggleMenu}><span>Enviar Correo </span></a>
						<ul className="d-flex align-center social-list">
							<li>
								<a href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={"2"} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
									</svg>
								</a>
							</li>
							<li>
								<a href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={"2"} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
								</a>
							</li>
							<li>
								<a href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={"2"} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
									</svg>
								</a>
							</li>
							<li>
								<a href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={"2"} strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
