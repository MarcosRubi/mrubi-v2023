import { Link, Outlet } from "react-router-dom";

function ProjectView() {
	return <>
		<div>Datos del proyecto</div>
		<Link to={'imagenes'}>Ver imagenes</Link>
		<Outlet/>
	</>;
}

export default ProjectView;
