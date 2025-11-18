import { createBrowserRouter, RouterProvider } from "react-router"
import petLoader from "./loaders/petLoader"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Intro from "./pages/Intro"
import './styles/main.sass'


function App() {

	const browserRouter = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			loader: petLoader,
			hydrateFallbackElement: <p>E</p>
		},
		{
			path: "/*",
			element: <Error />
		},
		{
			path: "/intro",
			element: <Intro />
		},
		{
			path: "/details/:petParam",
			element: <Intro />,
			loader: petLoader,
			hydrateFallbackElement: <p>E</p>
		}
	])

	return (
		<RouterProvider router={browserRouter} />
	)
}

export default App