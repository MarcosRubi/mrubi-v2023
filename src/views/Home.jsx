import Banner from '../sections/Banner'
import AboutMe from '../sections/AboutMe'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Certificates from '../sections/Certificates'
import Timeline from '../sections/Timeline'
import { Outlet } from 'react-router-dom'

function Home() {
	return <>
		<Banner/>
		<AboutMe/>
		<Projects/>
		<Experience/>
		<Certificates/>
		<Timeline/>
		<Outlet/>
	</>;
}

export default Home;
