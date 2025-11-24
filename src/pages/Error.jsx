import { Link } from "react-router"

function Error() {

	return (
		<main className="main-content error-content">
			<h2 className="error-content__error-code">
				404
			</h2>
			<p className="error-content__error-details">
				Could not find the page, click below for going back home.
			</p>
			<Link className="error-content__error-button" to={"/"}>
				Home
			</Link>
		</main>
	)
}

export default Error
