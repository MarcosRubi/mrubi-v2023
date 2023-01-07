import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MainContextProvider } from "./context/MainContext";
import './assets/scss/main.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MainContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MainContextProvider>
	</React.StrictMode>
);
