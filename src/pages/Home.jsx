import AnimalLister from "../components/AnimalLister.jsx"
import { useState } from "react"

export default function Home() {
	const [selectedSpecies, setSelectedSpecies] = useState("dogs")

	return (
		<main className="main-content home-content">
			<nav className="main-content__navigation">
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("cats")}>Cats</p>
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("dogs")}>Dogs</p>
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("birds")}>Birds</p>
				<p className="main-content__navigation-button" onClick={() => setSelectedSpecies("other")}>Other</p>
			</nav>
			<AnimalLister species={selectedSpecies} />
		</main>
	)
}