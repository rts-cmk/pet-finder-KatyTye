import Gender from "../assets/icons/gender.svg?react"
import { Link, useLoaderData } from "react-router"
import { IoPawOutline } from "react-icons/io5"
import { GoLocation } from "react-icons/go"
import "../styles/_details.sass"

function Details() {
	const petDetails = useLoaderData() || {}

	return (
		<main className="main-content details-content">
			<figure className="details-content__holder">
				<img src={`.${petDetails.image}`} alt={`image of ${petDetails.breed}`}
					className="details-content__image"></img>
				<figcaption className="details-content__container">
					<h2 className="details-content__title">
						{petDetails.breed}
					</h2>

					<p className="details-content__city">
						<GoLocation />
						<span className="details-content__city-name">
							{petDetails.location}
						</span></p>

					<ol className="details-content__tags">
						<li className="details-content__tags-breed details-content__tag"
							title={`Breed: ${petDetails.breed}`}>
							<IoPawOutline />
							<span>
								{petDetails.breed}
							</span>
						</li>
						<li className="details-content__tags-gender details-content__tag"
							title={`Gender: ${petDetails.gender}`}>
							<Gender />
							<span>
								{petDetails.gender}
							</span>
						</li>
					</ol>

					<p className="details-content__description">
						{petDetails.long_description}
					</p>

					<Link to={"/"} className="details-content__button">
						Back
					</Link>
				</figcaption>
			</figure>
		</main>
	)
}

export default Details
