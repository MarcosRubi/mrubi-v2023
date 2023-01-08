
function SettingTheme({changeTheme}) {
	const handleOnClick = ()=>{
		document.querySelector('.menu__preset-colors').classList.toggle('show')
	}
	return (<div className='menu__setting p-relative'>
		<button className="btn btn-secondary" onClick={handleOnClick}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
		</button>
		<div className="menu__preset-colors p-absolute w-100">
			<p>Seleccione el tema</p>
			<ul>
				<li className="w-100" onClick={()=>{changeTheme('default')}}>
					<div>
						<span className="theme-color" style={{ background: "#3959a2" }}></span>
						<span className="theme-color" style={{ background: "#a8dbd2" }}></span>
					</div>
				</li>
				<li className="w-100" onClick={()=>{changeTheme('purple')}}>
					<div>
						<span className="theme-color" style={{ background: "#9A9CEA" }}></span>
						<span className="theme-color" style={{ background: "#A2DCEE" }}></span>
					</div>
				</li>
				<li className="w-100" onClick={()=>{changeTheme('gray')}}>
					<div>
						<span className="theme-color" style={{ background: "#78A6C8" }}></span>
						<span className="theme-color" style={{ background: "#E65C4F" }}></span>
					</div>
				</li>
				<li className="w-100" onClick={()=>{changeTheme('green')}}>
					<div>
						<span className="theme-color" style={{ background: "#53D2B2" }}></span>
						<span className="theme-color" style={{ background: "#FFE3B3" }}></span>
					</div>
				</li>
			</ul>
		</div>
	</div>);
}

export default SettingTheme;
