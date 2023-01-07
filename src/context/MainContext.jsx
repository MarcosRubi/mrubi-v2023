import { createContext, useEffect, useState } from "react";
import dataCertificates from "../data/certificates.json";
import dataProjects from "../data/projects.json";

export const MainContext = createContext();

export function MainContextProvider(props) {
	const [certificates, setCertificates] = useState([]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setCertificates(dataCertificates);
		setProjects(dataProjects);
	}, []);


	//Devolvemos el proyecto que coincida con la búsqueda
	const findProjectByTitle = (title) => {
		return projects.filter((project) => resetTitle(project.title) === title);
	};

	//Sustituimos espacios en blanco por un guión y todo el título sea en minúsculas
	const resetTitle = (title) => {
		return title.split(" ").join("-").toLoweCase();
	};

	return (
		<MainContext.Provider
			value={{ certificates, projects, findProjectByTitle }}
		>
			{props.children}
		</MainContext.Provider>
	);
}

export default MainContext;
