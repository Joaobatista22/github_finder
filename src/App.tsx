import { Outlet } from "react-router-dom";
import { Container, H1 } from "./App.modules";
import GlobalStyles from "./styles/global.styles";

function App() {
	return (
		<Container>
			<H1>Github Finder</H1>
			<Outlet />
			<GlobalStyles />
		</Container>
	);
}

export default App;
