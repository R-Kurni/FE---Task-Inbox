import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import HomePage from "../views/HomePage.jsx";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);

export default router;
