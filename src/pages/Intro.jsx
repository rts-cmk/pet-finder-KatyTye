import { useNavigate } from "react-router"
import AnimalImage from "../assets/images/Animal.svg"
import "../styles/_intro.sass"

function Intro() {
	const navigate = useNavigate()

	function handle() {
		localStorage.setItem("introCompleted", true)
		navigate("/")
	}

	return (
		<main className="main-content intro-content">
			<img src={AnimalImage} alt="A image of a cat in the wild" className="intro-content__image"></img>

			<section className="intro-content__section">
				<h2 className="intro-content__title">
					My Pets
				</h2>

				<p className="intro-content__text intro-desc">
					Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.
				</p>
			</section>

			<button className="intro-content__button" onClick={() => handle()}>
				Skip
			</button>
		</main>
	)
}

export default Intro
