import { useNavigate } from "react-router"
import { useEffect } from "react"

function App() {
	const navigate = useNavigate()

	useEffect(() => {
		const introStatus = Boolean(localStorage.getItem("introCompleted")) || false
		const currentParam = new URLSearchParams(window.location.search).get("intro")

		if (currentParam === "completed" && !introStatus) {
			localStorage.setItem("introCompleted", "true")
		} else if (!introStatus) {
			navigate("/intro")
		}
	}, [])

	return (
		<>
		</>
	)
}

export default App
