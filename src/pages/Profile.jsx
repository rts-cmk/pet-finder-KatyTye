import { Link } from "react-router";

export default function Profile() {
	return (
		<main className="main-content profile-content">
			<h2>
				Nothing Here...
			</h2>
			<p>the profile page is empty</p>
			<Link to={"/admin"}>Open admin panel</Link>
		</main>
	)
}