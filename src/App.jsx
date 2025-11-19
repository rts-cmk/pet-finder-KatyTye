import { createBrowserRouter, RouterProvider } from "react-router"
import LoadingIcon from "./assets/icons/logo.svg?react"
import detailsLoader from "./loaders/detailsLoader"
import userLoader from "./loaders/userLoader"
import petLoader from "./loaders/petLoader"
import Messages from "./pages/Messages"
import Details from "./pages/Details"
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
			path: "/details/:petId",
			element: <Details />,
			loader: detailsLoader,
			hydrateFallbackElement: <LoadingIcon className="load" />
		},
		{
			element: <Layout />,
			loader: userLoader,
			hydrateFallbackElement: <LoadingIcon className="load" />,
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
					element: <Liked />
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