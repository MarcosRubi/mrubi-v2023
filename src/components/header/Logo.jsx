import { Link } from "react-router-dom";

function Logo({removeActiveLink}) {
	return <Link to={"#"} onClick={removeActiveLink}>
		<img src="https://marcosrubi.github.io/_mrubi-v2023/public/images/logo.webp" alt="Logo de Marcos Rubí" />
	</Link>;
}

export default Logo;
