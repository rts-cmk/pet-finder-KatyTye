import { GoLocation, GoHeartFill } from "react-icons/go"
import { Link, useRouteLoaderData } from "react-router"
import "../styles/_list.sass"

function AnimalLister({ species = "dog", amount = 4 }) {
	const animals = useRouteLoaderData("root")["dogs"] || []

	function returnTrueTarget(event) {
		let newTarget = event.target
		if (newTarget.tagName !== "BUTTON") {
			(newTarget.tagName === "svg") ? newTarget = newTarget.parentElement : newTarget = newTarget.parentElement.parentElement;
		}
		return newTarget
	}

	function handleLike(breedId, evt) {
		const likedStorage = localStorage.getItem("liked") || ""

		if (likedStorage.includes(breedId)) {
			localStorage.setItem("liked", likedStorage.replaceAll(breedId, ""))
			returnTrueTarget(evt).classList.remove("active")
		} else {
			localStorage.setItem("liked", `${likedStorage || ""}${breedId}`)
			returnTrueTarget(evt).classList.add("active")
		}
	}

	function LikeButton(obj) {
		const animal = obj.animal
		const likedStorage = localStorage.getItem("liked")
		const liked = Boolean(likedStorage?.includes(animal.id)) || false

		return (
			<button className={`animal-list__item-button like-button ${(liked === true && "active" || "")}`}
				onClick={event => handleLike(animal.id, event)}>
				<GoHeartFill />
			</button>
		)
	}

	return (

		<ul className={`animal-list ${species}-type`}>
			{animals.length > 0 && (
				animals.map((animal, idx) => {
					if (idx < amount) {
						return (
							<li className="animal-list__item" key={`${animal.breed}-${animal.id}`}>
								<img src={`.${animal.image}`} alt={`image of ${animal.breed}`} className="animal-list__item-image"></img>
								<div className="animal-list__item-content">
									<h2 className="animal-list__item-name">
										<Link to={`/details/${animal.id}`}>{animal.breed}</Link>
									</h2>
									<p className="animal-list__item-location">
										<GoLocation /> {animal.location}
									</p>
									<p className="animal-list__item-description normal-desc">
										{animal.short_description}
									</p>
								</div>

								<LikeButton animal={animal} />
							</li>
						)
					}
				})
			)}
		</ul>
	)
}

export default AnimalLister