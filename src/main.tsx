import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import Home from "./routes/Home.tsx";
import Repos from "./routes/Repos";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/repos/:username",
				element: <Repos />,
			},
		],
	},
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
