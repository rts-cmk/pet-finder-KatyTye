import { useRouteLoaderData } from "react-router";
import AdminForum from "../components/AdminForum";

function Admin() {
	const savedKey = localStorage.getItem("adminKey") || "no"

	return (
		<main className="main-content admin-content">
			{(savedKey === import.meta.env.VITE_ADMIN_KEY) &&
				<AdminForum />
			}
			{(savedKey !== import.meta.env.VITE_ADMIN_KEY) &&
				<p>You are not a admin</p>
			}
		</main>
	)
}

export default Admin