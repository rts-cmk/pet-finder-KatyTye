import { createBrowserRouter, RouterProvider } from "react-router"
import userLoader from "./loaders/userLoader"
import petLoader from "./loaders/petLoader"
import Messages from "./pages/Messages"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Liked from "./pages/Liked"
import Intro from "./pages/Intro"
import './styles/main.sass'


function App() {

	const browserRouter = createBrowserRouter([
		{
			path: "/intro",
			element: <Intro />
		},
		{
			path: "/details/:petParam",
			element: <Intro />
		},
		{
			element: <Layout />,
			loader: userLoader,
			hydrateFallbackElement: <p>Loading...</p>,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home />,
					loader: petLoader
				},
				{
					path: "/messages",
					element: <Messages />,
				},
				{
					path: "/liked",
					element: <Liked />,
					loader: petLoader
				},
				{
					path: "/profile",
					element: <Profile />,
				}
			]
		}
	])

	return (
		<RouterProvider router={browserRouter} />
	)
}

export default App