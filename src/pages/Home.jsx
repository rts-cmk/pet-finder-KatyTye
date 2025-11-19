import AnimalLister from "../components/AnimalLister.jsx"
import { useState } from "react"

export default function Home() {
	const [selectedSpecies, setSelectedSpecies] = useState("dog")

	return (
		<main className="main-content home-content">
			<nav className="main-content__navigation">
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("cat")}>Cats</p>
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("dog")}>Dogs</p>
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("bird")}>Birds</p>
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("other")}>Other</p>
			</nav>
			<AnimalLister species={selectedSpecies} amount={4} />
		</main>
	)
}