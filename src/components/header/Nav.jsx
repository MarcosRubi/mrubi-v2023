import { Link } from "react-router-dom";
import {SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook, SlSocialTwitter} from 'react-icons/sl'

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
								<a href="#"><SlSocialLinkedin/></a>
							</li>
							<li>
								<a href="#"><SlSocialInstagram/></a>
							</li>
							<li>
								<a href="#"><SlSocialFacebook/></a>
							</li>
							<li>
								<a href="#"><SlSocialTwitter/></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
