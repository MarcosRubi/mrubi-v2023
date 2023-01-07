import { createContext } from "react";

export const MainContext = createContext();

export function MainContextProvider(props) {
	return <MainContext.Provider>{props.children}</MainContext.Provider>;
}

export default MainContext;
