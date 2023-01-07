import { Link, Outlet } from "react-router-dom";

function ProjectView() {
	return <section>
		<div>Datos del proyecto</div>
		<Link to={'imagenes'}>Ver imagenes</Link>
		<Outlet />
	</section>;
}

export default ProjectView;
