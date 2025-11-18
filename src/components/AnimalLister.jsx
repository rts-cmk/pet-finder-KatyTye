import { GoLocation, GoHeart } from "react-icons/go"
import { useEffect, useState } from "react"
import "../styles/_list.sass"
import { Link } from "react-router"

function AnimalLister({ species, amount }) {
	const [animals, setAnimals] = useState([])

	useEffect(() => {
		fetch(`http://localhost:4000/${species}s`)
			.then((response) => response.json())
			.then((data) => {
				setAnimals(data)
			})
	}, [])

	return (

		<ul className={`animal-list ${species}-type`}>
			{animals.length > 0 && (
				animals.map((animal, idx) => {
					if (idx < amount) {
						return (
							<li className="animal-list__item" key={`${animal.breed}-${animal.id}`}>
								<img src={animal.image} alt="image of animal" className="animal-list__item-image"></img>
								<div className="animal-list__item-content">
									<h2 className="animal-list__item-name">
										<Link to={`/pet/${animal.breed.toLowerCase()}`}>{animal.breed}</Link>
									</h2>
									<p className="animal-list__item-location">
										<GoLocation /> {animal.location}
									</p>
									<p className="animal-list__item-description normal-desc">
										{animal.short_description}
									</p>
								</div>

								<button className="animal-list__item-button like-button">
									<GoHeart />
								</button>
							</li>
						)
					}
				})
			)}
		</ul>
	)
}

export default AnimalLister