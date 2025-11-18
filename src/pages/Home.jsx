import AnimalLister from "../components/AnimalLister.jsx"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

export default function Home() {
	const [selectedSpecies, setSelectedSpecies] = useState("dog")
	const navigate = useNavigate()

	useEffect(() => {
		const introStatus = Boolean(localStorage.getItem("introCompleted")) || false
		const currentParam = new URLSearchParams(window.location.search).get("intro")

		if (currentParam === "completed" && !introStatus) {
			localStorage.setItem("introCompleted", "true")
		} else if (!introStatus) {
			navigate("/intro")
		}
	}, [navigate])

	return (
		<>
			<AnimalLister species={selectedSpecies} amount={3} />
		</>
	)
}